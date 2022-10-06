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
          <Route path='/shop/tops' element={<Products />} />
          <Route path='/shop/jackets' element={<Products />} />
          <Route path='/shop/pants' element={<Products />} />
          <Route path='/shop/shorts' element={<Products />} />
          <Route path='/shop/underwear' element={<Products />} />
          <Route path='/shop/swimwear' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
