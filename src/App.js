import Navbar from "./Components/Navbar";
import Index from "./Components/Index";
import NewSupply from "./Components/NewSupply";
import Supply from "./Components/Supply";
import Cart from "./Components/Cart";
import Show from "./Components/Show";
// import Edit from "./Components/Edit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { useState } from "react";

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
          <Route path="/" element={<Index />} />
          <Route path="/supplies/:id" element={<Show />} />
          <Route path="/newsupply" element={<NewSupply />} />
          {/* <Route path="/:id/edit" elemment={<Edit />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
