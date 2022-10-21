import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className='container'>
        <Link to=''>
          <h1>INVICTUS</h1>
        </Link>
        <ul>
          <li><Link className='nav-link' to=''>Home</Link></li>
          <li><Link className='nav-link' to='shop'>Shop</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;