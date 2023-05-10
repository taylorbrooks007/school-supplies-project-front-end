import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>
        School Supply Store
        <ul>
          <Link to="/NewSupply">
            <button>Create New Supply</button>{" "}
          </Link>
        </ul>
      </h1>
    </div>
  );
}
