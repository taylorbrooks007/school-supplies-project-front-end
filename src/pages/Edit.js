import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Edit(){

  const { id } = useParams();
  const navigate = useNavigate();

  const [supply, setSupply] = useState({
    name: "",
    brand: "",
    image_url: "",
    price: 0.00,
    quantity: 0,
    description: "",
    in_stock: false,
  });

  const updateSupply = (updatedSupply) => {
    axios
      .put(`${API}/supplies/${id}`, updatedSupply)
      .then(
        () => {
          navigate(`/supplies/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSupply({ ...supply, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSupply({ ...supply, in_stock: !supply.in_stock });
  };

  useEffect(() => {
    axios.get(`${API}/supplies/${id}`)
    .then(
      (response) => setSupply(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id]);

  console.log(supply)

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSupply(supply, id);
  };

  return (
    <div>
      <header>
        <h2>Edit Product</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={supply.name}
            onChange={handleTextChange}
            id="name"
            required
          />
          <label htmlFor="image_url">Image URL: </label>
          <input
            type="text"
            value={supply.image_url}
            onChange={handleTextChange}
            id="image_url"
          />
          <label htmlFor="brand">Brand: </label>
          <input
            type="text"
            value={supply.brand}
            onChange={handleTextChange}
            id="brand"
            required
          />
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            value={supply.quantity}
            onChange={handleTextChange}
            id="quantity"
            required
          />
          <label htmlFor="description">Descripton: </label>
          <input
            type="text"
            value={supply.description}
            onChange={handleTextChange}
            id="description"
            required
          />
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            value={supply.price}
            onChange={handleTextChange}
            id="price"
            step="0.01"
            min="0" 
            required
          />
          <label htmlFor="in_stock">In Stock: </label>
          <input
          type="checkbox" 
          id="in_stock" 
          name="in_stock" 
          checked={supply.in_stock}
          onChange={handleCheckboxChange}
          />
          <input type="submit"/>
          <br />
        </form>
      </main>
    </div>
  );
}
