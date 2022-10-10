import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';

function Shop() {

  const [cart, setCart] = useState([]);

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

  return (
    <div className='shop'>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <div>
        <ul>
          <li><Link to='tops'>Tops</Link></li>
          <li><Link to='jackets'>Jackets and Coats</Link></li>
          <li><Link to='pants'>Pants</Link></li>
          <li><Link to='shorts'>Shorts</Link></li>
          <li><Link to='underwear'>Underwear</Link></li>
          <li><Link to='swimwear'>Swimwear</Link></li>
        </ul>
      </div>
      <Outlet context={addToCart} />
    </div>
  );

}

export default Shop;
