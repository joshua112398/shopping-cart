import { useEffect, useState } from "react";
import Product from "./Product";

function Products({ categoryId, category }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e42a328d2fmsh7815adb1a4aec40p1eb8cbjsnbf9b4488f0bb',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    };

    const fetchProducts = async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=COM&offset=30&categoryId=${categoryId}&limit=30&country=GB&sort=freshness&currency=GBP&sizeSchema=US&brand=53&lang=en-GB`, options)
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  function getProductNames() {
    if (products.length === 0) {
      return null;
    }
    let inc = 0;
    return products.map((product) => {
      inc += 1;
      return <Product key={inc} name={product.name} imageUrl={product.imageUrl} price={product.price.current.text}/>;
    });
  }

  if (loading) {
    return (
      <div className='loadingScreen'>Loading...</div>
    );
  } else {
    return (
      <div>
        <h1>{category}</h1>
        {getProductNames()}
      </div>
    );
  }
}

export default Products;