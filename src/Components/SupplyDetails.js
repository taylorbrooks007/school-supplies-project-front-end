import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export function SupplyDetails() {
  const [supply, setSupply] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/supplies/${id}`)
      .then((response) => {
        setSupply(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(supply);
  return (
    <div>
      <img alt="supply.image_url" src={supply.image_url} />
      <p>Price: {supply.price}</p>
      <p>Product Description: {supply.description}</p>
      <p>Quantity In Stock: {supply.quantity}</p>
      <button>Add To Cart</button>
      <button>Edit Supply</button>
      <button>DELETE SUPPLY</button>
    </div>
  );
}
