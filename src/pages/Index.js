import axios from "axios";
import { useState, useEffect } from "react";
import Supply from "../components/Supply";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Index({handleCartTotal, total, cart}) {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/supplies`)
      .then((response) => {
        setSupplies(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, []);

  return (
    <div className="index">
      <section className="cards">
        {supplies ? supplies.map((supply) => {
          return (  
              <Supply supply={supply} key={supply.id} handleCartTotal={handleCartTotal}/>
          )
        }): null}
      </section>
      <div className="cart-box">
          <Cart total={total} cart={cart}/>
      </div>
    </div>
  );
}
