import { useEffect, useState } from "react";

function Product({ name, imageUrl, price }) {

  const [amount, setAmount] = useState(0);

  const onChangeEvent = (e) => {
    setAmount(e.target.value);
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
      <p>{price}</p>
      <form>
        <button className='editButton' onClick={decrementAmount}>-</button>
        <input type='number' value={amount} onChange={onChangeEvent}/>
        <button className='editButton' onClick={incrementAmount}>+</button>
        <button className='addButton'>Add</button>
      </form>
    </div>
  );
}

export default Product;