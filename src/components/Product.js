import { useEffect, useState } from "react";

function Product({ name, imageUrl, price, addToCart }) {

  // contains the currently inputted amount next to the Add to Cart button
  const [amount, setAmount] = useState(0);

  const onChangeEvent = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const decrementAmount = (e) => {
    e.preventDefault();
    if (amount === 0) {
      return;
    }
    setAmount(amount => amount - 1);
  };

  const incrementAmount = (e) => {
    e.preventDefault();
    if (amount === 99) {
      return;
    }
    setAmount(amount => amount + 1);
  };

  return (
    <div className='product'>
      <img alt={name} src={`https://${imageUrl}`} />
      <h3>{name}</h3>
      <p className='shop-price'>{price}</p>
      <form>
        <button className='editButton' onClick={decrementAmount}>-</button>
        <input className='amount-input' type='number' value={amount} onChange={onChangeEvent}/>
        <button className='editButton' onClick={incrementAmount}>+</button>
        <button className='addButton' onClick={(e) => { 
          e.preventDefault();
          if (amount > 0) {
            addToCart(name, imageUrl, price, amount); 
          }
          }
        }>Add to Cart</button>
      </form>
    </div>
  );
}

export default Product;