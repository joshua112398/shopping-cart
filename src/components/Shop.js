import { Outlet, Link } from 'react-router-dom';
import Cart from './Cart';

function Shop() {

  return (
    <div className='shop'>
      <Cart />
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
      <Outlet />
    </div>
  );

}

export default Shop;
