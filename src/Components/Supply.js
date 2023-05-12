import "./Supply.css";
import { Link } from "react-router-dom";
export default function Supply({ supply }) {
  // function handleClick(supply) {
  //   setCart([...cart, supply]);
  // }

  return (
    <div className="card">
      <img alt="supply.image_url" src={supply.image_url} />

      <p>Price: {supply.price}</p>
      <p>Product Description: {supply.description}</p>
      <p>Quantity In Stock: {supply.quantity}</p>
      <button>Add To Cart</button>
    </div>
  );
}
