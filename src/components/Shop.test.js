import { render, screen, within } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import userEvent from '@testing-library/user-event';
import Shop from "./Shop";

describe('Shop', () => {

  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;

    const mockData = {
      products: [{ name: 'ProductOne', imageUrl: 'Url', price: { current: { text: '500' } }}],
    };

    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(mockData);
        },
      }); 
    });
  });

  afterEach(() => {
    global.fetch = originalFetch;
  })

  it('all links show up on screen', () => {
    const { container } = render(
      <BrowserRouter>
        <Shop />)
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it('adding a Product to cart makes it show up in the Cart items list', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />}>
            <Route path='/tops' element={<Products categoryId={7616} category={'Tops'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
    const navButton = screen.getByRole('link', {name: 'Tops'});

    const user = userEvent.setup();
    await user.click(navButton);
    const addToCart = await screen.findByRole('button', {name: 'Add'});
    await user.click(addToCart);

    const cart = screen.getByTestId('shopping-cart');
    const cartItem = within(cart).getByText('ProductOne');
    expect(cartItem.textContent).toBe('ProductOne');
  });

  it('removing a Product from cart makes it disappear from Cart items list', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />}>
            <Route path='/tops' element={<Products categoryId={7616} category={'Tops'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
    const navButton = screen.getByRole('link', {name: 'Tops'});

    const user = userEvent.setup();
    await user.click(navButton);
    const addToCart = await screen.findByRole('button', {name: 'Add'});
    await user.click(addToCart);

    const cart = screen.getByTestId('shopping-cart');
    const removeButton = within(cart).getByText('Remove');
    await user.click(removeButton);
    const cartItem = within(cart).queryByText('ProductOne');
    expect(cartItem).toBe(null);
  });
});
