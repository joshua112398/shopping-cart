import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';

function Shop() {

  const [cart, setCart] = useState([]);

  const addToCart = (name, imageUrl, price, amount) => {
    console.log(`Added ${amount} of ${name} to cart`);
  };

  return (
    <div className='shop'>
      <Cart cart={cart} />
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
