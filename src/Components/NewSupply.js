import { useState } from "react";
import "./NewSupply.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewSupply() {
  let navigate = useNavigate();

  const addSupply = (newSupply) => {
    console.log(newSupply);
    axios
      .post(`${API}/supplies`, newSupply)
      .then(
        () => {
          navigate(`/supply`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [supply, setSupply] = useState({
    name: "",
    brand: "",
    // image_url: "",
    price: "",
    quantity: 0,
    descripton: "",
    in_stock: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    addSupply(supply);
    // resetForm();
  }

  function handleTextChange(event) {
    setSupply({
      ...supply,
      [event.target.id]: event.target.value,
    });
  }

  function resetForm() {
    setSupply({
      name: "",
      brand: "",
      // image_url: "",
      price: "",
      quantity: 0,
      descripton: "",
      in_stock: "",
    });
  }
  return (
    <div>
      <header>
        <h2>Create New Supply</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={supply.name}
            onChange={handleTextChange}
            id="name"
            required
          />
          <label htmlFor="img">Img:</label>
          <input
            type="text"
            value={supply.img}
            onChange={handleTextChange}
            id="img"
            required
          />
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            value={supply.brand}
            onChange={handleTextChange}
            id="brand"
            required
          />
          <label htmlFor="quantity">Quantity In Stock:</label>
          <input
            type="number"
            value={supply.quantity}
            onChange={handleTextChange}
            id="quantity"
            required
          />
          <label htmlFor="description">Descripton:</label>
          <input
            type="text"
            value={supply.description}
            onChange={handleTextChange}
            id="description"
            required
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            value={supply.price}
            onChange={handleTextChange}
            id="price"
            required
          />
          <label htmlFor="in_stock">In Stock:</label>
          <input
            type="text"
            value={supply.in_stock}
            onChange={handleTextChange}
            id="in_stock"
            required
          />
          <button>Submit</button>
          <br />
        </form>
      </main>
    </div>
  );
}
