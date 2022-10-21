import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <div className='container'>
        <div className='hero'>
          <div className='hero-header'>
            <h1>INVICTUS</h1>
            <h2>Fashion for Men</h2>
          </div>
          <p>Bringing guys the latest in fashion</p>
          <Link to='shop'><button className='large-button'>Shop</button></Link>
        </div>
      </div>
    </main>
  );
};

export default Home;