import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import cartImage from '../images/cart-svgrepo-com.svg';

function Shop() {

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (name, imageUrl, price, amount) => {
    console.log('adding to cart');
    const index = cart.findIndex((element) => {
      return element.name === name;
    });
    // if existing item is not found, add it as a new item to the cart
    if (index === -1) {
      setCart((cart) => {
        console.log(cart.concat({name, imageUrl, price, amount}));
        return cart.concat({name, imageUrl, price, amount});
      });
    // else if an existing item IS found, increase the amount
    } else {
      setCart((cart) => {
        let count = 0;
        return cart.map((item) => {
          const newItem = {...item};
          if (count === index) {
            newItem.amount += amount;
          }
          count += 1;
          return newItem;
        });
      });
    }
  };

  const removeFromCart = (itemName) => {
    const index = cart.findIndex((element) => {
      return element.name === itemName;
    });
    setCart((cart) => {
      const cartClone = cart.map((item) => {
        const newItem = {...item};
        return newItem;
      });
      cartClone.splice(index, 1);
      return cartClone;
    });
  };

  const toggleCart = () => {
    console.log('Toggling Cart');
    setShowCart((showCart) => {
      console.log(!showCart);
      return !showCart;
    });
  };

  return (
    <div className='shop'>
      <button className='cart-button' onClick={toggleCart}><img className='filter-white' src={cartImage} alt='cart'/></button>
      <Cart cart={cart} toggleCart={toggleCart} showCart={showCart} removeFromCart={removeFromCart} />
      <div className='shop-nav'>
        <ul>
          <li><Link to='tops'>TOPS</Link></li>
          <li><Link to='jackets'>JACKETS</Link></li>
          <li><Link to='pants'>PANTS</Link></li>
          <li><Link to='shorts'>SHORTS</Link></li>
          <li><Link to='underwear'>UNDERWEAR</Link></li>
          <li><Link to='swimwear'>SWIMWEAR</Link></li>
        </ul>
      </div>
      <div className='container'>
        <Outlet context={addToCart} />
      </div>
    </div>
  );

}

export default Shop;
