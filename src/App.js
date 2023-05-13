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
import SupplyDetails from "./components/SupplyDetails";



function App() {
  const [cart, setCart] = useState([]);
  // will be an empty array
  const [total, setTotal] = useState(0);
  // will be a number to set total for cart price
  //anything

  // function getTotal(price){
  //   let sum = 0;
  //   sum+=price;
  //   setTotal(sum)
  //   return sum 
  // }

  function handleCartTotal(price, name){
    setTotal((total) => total + Number(price))
    setCart(cart => [...cart, name] );
  }

  console.log(cart)
  


  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index handleCartTotal={handleCartTotal} />} />
          <Route path="/supplies/:id" element={<SupplyDetails handleCartTotal={handleCartTotal} />} />
          <Route path="/newsupply" element={<NewSupply />} />
          <Route path="supplies/:id/edit" element={<Edit />} />
          <Route path="/cart" element={<Cart cart={cart} total={total}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
