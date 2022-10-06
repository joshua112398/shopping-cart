import { useEffect } from "react";

function Product({ name, imageUrl, price }) {

  return (
    <div className='product'>
      <img alt={name} src={`https://${imageUrl}`} />
      <h3>{name}</h3>
      <p>{price}</p>
      <form>
        <button className='editButton'>+</button>
        <input type='number' />
        <button className='editButton'>-</button>
        <button className='addButton'>Add</button>
      </form>
    </div>
  );
}

export default Product;