function Cart({ cart, removeFromCart }) {

  const showCartItems = () => {
    let count = 0;
    return cart.map((item) => {
      count += 1;
      return (
        <div key={count} className='cart-item'>
          <img src={`https://${item.imageUrl}`} alt={item.name}/>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>Quantity: {item.amount}</p>
          <button onClick={() => { removeFromCart(item.name); }}>Remove</button>
        </div>
      );
    })
  };

  return (
    <div data-testid='shopping-cart'>
      <h1>Your Cart</h1>
      {showCartItems()}
    </div>
  );
};

export default Cart;