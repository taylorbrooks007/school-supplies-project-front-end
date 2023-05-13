import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NewSupply from "./components/NewSupply";
import Cart from "./components/Cart";
import Show from "./pages/Show";
import { useState } from "react";
import Edit from "./pages/Edit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"



function App() {
  const [cart, setCart] = useState([]);
  // will be an empty array
  const [total, setTotal] = useState(0);
  // will be a number to set total for cart price
  //anything

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/supplies/:id" element={<Show />} />
          <Route path="/newsupply" element={<NewSupply />} />
          <Route path="supplies/:id/edit" element={<Edit />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
