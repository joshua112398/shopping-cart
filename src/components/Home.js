import '../styles/Home.css';
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
          <button className='large-button'>Shop</button>
        </div>
      </div>
    </main>
  );
};

export default Home;