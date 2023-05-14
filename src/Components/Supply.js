import { Link } from "react-router-dom";
import "./Supply.css";
export default function Supply({ supply, handleCartTotal }) {
  return (
    <div className="card">
      <Link to={`/supplies/${supply.id}`}>
        <h2>{supply.name}</h2>
      </Link>
      <img alt={supply.name} src={supply.image_url} width="400px" />
      <p>
        <strong>Price:</strong> ${supply.price}
      </p>
      <p>
        <strong>Product Description:</strong> {supply.description}
      </p>
      <p>
        <strong>Quantity In Stock:</strong> {supply.quantity}
      </p>
      <button onClick={() => handleCartTotal(supply.price, supply)}>
        Add To Cart
      </button>
    </div>
  );
}
