import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from './components/Product';

describe('Product', () => {

  it('displays all its info on screen', async () => {
    render(<Product name='Pants' imageUrl='fakeurl' price='5' />);
    const productName = await screen.findByText('Pants');
    const productImg = await screen.findByAltText('Pants');
    const productPrice = await screen.findByText('5');
    expect(productName.textContent).toBe('Pants');
    expect(productImg.src).toBe('https://fakeurl/');
    expect(productPrice.textContent).toBe('5');
  });

  it('amount can be incremented using the button', async () => {
    render(<Product name='Pants' imageUrl='fakeurl' price='5' />);
    const incrementButton = screen.getByRole('button', {name: '+'});
    let amount = parseInt(screen.getByRole('spinbutton').value);
    expect(amount).toBe(0);

    const user = userEvent.setup();
    await user.click(incrementButton);
    amount = parseInt(screen.getByRole('spinbutton').value);
    expect(amount).toBe(1);
  });

  it('amount can be decremented using the button', async () => {
    render(<Product name='Pants' imageUrl='fakeurl' price='5' />);
    const incrementButton = screen.getByRole('button', {name: '+'});
    const decrementButton = screen.getByRole('button', {name: '-'});
    let amount = parseInt(screen.getByRole('spinbutton').value);
    expect(amount).toBe(0);

    const user = userEvent.setup();
    await user.click(incrementButton);
    await user.click(decrementButton);
    amount = parseInt(screen.getByRole('spinbutton').value);
    expect(amount).toBe(0);
  });

  it('amount can be manually typed in', async () => {
    render(<Product name='Pants' imageUrl='fakeurl' price='5' />);
    const inputAmount = screen.getByRole('spinbutton');
    let amount = parseInt(inputAmount.value);
    expect(amount).toBe(0);

    const user = userEvent.setup();
    await user.clear(inputAmount);
    await user.type(inputAmount, '5');
    amount = parseInt(inputAmount.value);
    expect(amount).toBe(5);
  });
});