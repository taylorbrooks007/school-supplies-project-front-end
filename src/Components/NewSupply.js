import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewSupply(){
  
  let navigate = useNavigate();

  const addSupply = (newSupply) => {
    axios
      .post(`${API}/supplies`, newSupply)
      .then(
        () => {
          navigate('/');
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [supply, setSupply] = useState({
    name: "",
    brand: "",
    image_url: "",
    price: 0.00,
    quantity: 0,
    description: "",
    in_stock: false,
  });

  

  function handleSubmit(event){
    event.preventDefault();
    addSupply(supply);
    // resetForm();
  }

  function handleTextChange(event){
    setSupply({
      ...supply,
      [event.target.id]: event.target.value,
    });
  }

  const handleCheckboxChange = () => {
    setSupply({ ...supply, in_stock: !supply.in_stock });
  };

  return (
    <div className="new-supply-form">
        <h2>Create New Product</h2>
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
          <input className="button-link" type="submit"/>
          <br />
        </form>
      </main>
    </div>
  );
}
