import { useEffect, useState } from "react";
import Product from "./Product";

function Products({ categoryId }) {

  const [products, setProducts] = useState([]);

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
        const response = await fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=${categoryId}&limit=30&country=US&sort=freshness&currency=USD&sizeSchema=US&brand=53&lang=en-US`, options)
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

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

  return (
    <div>
      Tests
      {getProductNames()}
    </div>
  );
}

export default Products;