import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <article className="navbar">
        <nav>
        <ul>
          <li>
          <Link to="/NewSupply">
           Create New Supply
          </Link>
          </li>
          <li>
          <Link to="/cart">
            View Cart
          </Link>
          </li>
        </ul>
        </nav>
       
      </article>
    </div>
  );
}
