import axios from "axios";
import { useState, useEffect } from "react";
import Supply from "../components/Supply"
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Index() {
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
      <h1>Welcome to School Supply Application</h1>
      <section className="cards">
        {supplies ? supplies.map((supply) => {
          return (  
              <Supply supply={supply} key={supply.id}/>
          )
        }): null}
      </section>
    </div>
  );
}
