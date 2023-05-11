import axios from "axios";
import { useState, useEffect } from "react";
import Supply from "./Supply";

const API = process.env.REACT_APP_API_URL;

export default function Index() {
  const [supply, setSupply] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/supply`)
      .then((response) => {
        setSupply(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, []);

  return (
    <div className="index">
      <section>
        <table>
          <tbody>
            {supply.map((supply) => {
              return <Supply key={supply.id} supply={supply} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
