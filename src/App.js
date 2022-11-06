import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './styles/style.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Products from './components/Products';


function App() {
  return (
    <BrowserRouter basename='/'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />}> 
          <Route index element={<Products categoryId={7616} category={'Tops'} />} />
          <Route path='/shop/tops' element={<Products categoryId={7616} category={'Tops'} />} />
          <Route path='/shop/jackets' element={<Products categoryId={3606} category={'Jackets'} />} />
          <Route path='/shop/pants' element={<Products categoryId={4910} category={'Pants'} />} />
          <Route path='/shop/shorts' element={<Products categoryId={7078} category={'Shorts'} />} />
          <Route path='/shop/underwear' element={<Products categoryId={20317} category={'Underwear'} />} />
          <Route path='/shop/swimwear' element={<Products categoryId={13210} category={'Swimwear'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
