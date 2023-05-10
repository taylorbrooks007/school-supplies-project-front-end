import { useState } from "react";
import "./NewSupply.css";
export default function NewSupply() {
  const [user, setUser] = useState({
    Name: "",
    img: "",
    Descripton: "",
    Brand: "",
    Price: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    resetForm();
  }

  function handleTextChange(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }

  function resetForm() {
    setUser({
      Name: "",
      img: "",
      Descripton: "",
      Price: "",
    });
  }
  return (
    <div>
      <header>
        <h2>Create New Supply</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            value={user.Name}
            onChange={handleTextChange}
            id="Name"
          />
          <label htmlFor="img">Img:</label>
          <input
            type="text"
            value={user.Img}
            onChange={handleTextChange}
            id="img"
          />
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            value={user.Brand}
            onChange={handleTextChange}
            id="brand"
          />
          <label htmlFor="description">Descripton:</label>
          <input
            type="text"
            value={user.description}
            onChange={handleTextChange}
            id="description"
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            value={user.price}
            onChange={handleTextChange}
            id="price"
          />
          <button>Submit</button>
          <br />
        </form>
      </main>
    </div>
  );
}
