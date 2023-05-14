import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NewSupply from "./components/NewSupply";
import Cart from "./components/Cart";
import Show from "./pages/Show";
import { useState } from "react";
import Edit from "./pages/Edit";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import SupplyDetails from "./components/SupplyDetails";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  function handleCartTotal(price, name) {
    setTotal((total) => total + Number(price));
    setCart((cart) => [...cart, name]);
  }

  console.log(cart);

  return (
    <div className="app">
      <Router>
        <header>
        <div className="header-content">
          <Link to="/">
          <h1>Welcome to School Supplies Application</h1>
          </Link>
          <Navbar />
          </div>
         
        </header>
        <Routes>
          <Route
            path="/"
            element={<Index handleCartTotal={handleCartTotal} />}
          />
          <Route
            path="/supplies/:id"
            element={<SupplyDetails handleCartTotal={handleCartTotal} />}
          />
          <Route path="/newsupply" element={<NewSupply />} />
          <Route path="supplies/:id/edit" element={<Edit />} />
          <Route path="/cart" element={<Cart cart={cart} total={total} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
