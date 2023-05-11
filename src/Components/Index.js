import axios from "axios";
import { useState, useEffect } from "react";
import Supply from "./Supply";

const API = process.env.REACT_APP_API_URL;
console.log(API);

export default function Index() {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${API}/`)
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
        <table>
          <tbody>
            {/* {supplies.map((supply) => {
              return <Supply key={supply.id} supply={supply} />;
            })} */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
