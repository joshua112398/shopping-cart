import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Products categoryId={7078}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />}> 
          <Route path='/shop/tops' element={<Products categoryId={7616} />} />
          <Route path='/shop/jackets' element={<Products categoryId={3606} />} />
          <Route path='/shop/pants' element={<Products categoryId={4910} />} />
          <Route path='/shop/shorts' element={<Products categoryId={7078} />} />
          <Route path='/shop/underwear' element={<Products categoryId={20317} />} />
          <Route path='/shop/swimwear' element={<Products categoryId={13210} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
