import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

export default function SupplyDetails({handleCartTotal}) {
  const [supply, setSupply] = useState({});
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

  const handleDelete = () => {
    deleteSupply();
  };

  const deleteSupply = () => {
    axios
      .delete(`${API}/supplies/${id}`)
      .then(() => {
        navigate(`/`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

  return (
    <div className="supplyDetails">
      <h2>{supply.name}</h2>
      <img alt="image_url" src={supply.image_url} width="400px"/>
      <p>Price: ${supply.price}</p>
      <p>Product Description: {supply.description}</p>
      <p>Quantity In Stock: {supply.quantity}</p>
      <button onClick={()=>handleCartTotal(supply.price, supply)}>Add To Cart</button>
      <Link to={`/supplies/${id}/edit`}>
        <button>Edit</button>
        </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
