import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to={`/`}>
      <h1>
        School Supply Store
        </h1>
      </Link>
        <ul>
          <Link to="/NewSupply">
            <button>Create New Supply</button>{" "}
          </Link>
        </ul>
    </div>
  );
}
