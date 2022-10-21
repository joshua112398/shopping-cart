function Cart({ cart, toggleCart, showCart, removeFromCart }) {

  const showCartItems = () => {
    let count = 0;
    return cart.map((item) => {
      count += 1;
      return (
        <div key={count} className='cart-item'>
          <img src={`https://${item.imageUrl}`} alt={item.name}/>
          <p>{item.name}</p>
          <p className='shop-price'>{item.price}</p>
          <p>Quantity: {item.amount}</p>
          <button className='remove-button' onClick={() => { removeFromCart(item.name); }}>Remove</button>
        </div>
      );
    })
  };

  if (showCart) {
    return (
      <div className='cart-modal'>
        <div data-testid='shopping-cart' className='cart'>
          <button className='hideButton' onClick={toggleCart}> X</button>
          <h1>Your Cart</h1>
          <div className='cart-items'>{showCartItems()}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Cart;