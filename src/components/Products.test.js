import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Products from "./Products";

describe("Products", () => {
  let originalFetch;
  let options;

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

    options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e42a328d2fmsh7815adb1a4aec40p1eb8cbjsnbf9b4488f0bb',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    };
  });

  afterEach(() => {
    global.fetch = originalFetch;
  })

  it("calls fetch once with the correct URL", async () => {
    render(<Products categoryId={'7616'}/>);
    await act(async () => {
      expect(fetch).toHaveBeenCalledWith('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=170&categoryId=7616&limit=30&country=US&sort=freshness&currency=USD&sizeSchema=US&brand=53&lang=en-US', options);
    });
  });

  it("sets state to display fetched product info", async () => {
    render(<Products categoryId={'7616'}/>);
    const productName = await screen.findByText('ProductOne');
    const productImg = await screen.findByAltText('ProductOne');
    const productPrice = await screen.findByText('500');
    expect(productName.textContent).toBe('ProductOne');
    expect(productImg.src).toBe('https://url/');
    expect(productPrice.textContent).toBe('500');
  });
});