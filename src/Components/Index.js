import axios from "axios";
import { useState, useEffect } from "react";
import Supply from "./Supply";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
console.log(API);

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
  console.log(supplies);
  return (
    <div className="index">
      <header>Welcome to School Supply Application</header>
      <section>
        {supplies.map((supply, index) => {
          return (
            <div key={supply.id}>
              <Link to={`supply/${supply.id}`}>
                <h2>{supply.name}</h2>
              </Link>
              <Supply key={supply.id} supply={supply} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
