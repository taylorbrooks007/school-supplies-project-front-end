import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";




export default function Navbar() {
  return (
    <div>
      <article className="navbar">
        <nav>
        <ul>
          <li>
          <Link className="button-link" to="/NewSupply">
           Create New Supply
          </Link>
          </li>
          <li>
          <Link to="/cart" className="button-link" >
          <FaShoppingCart/>
          &nbsp; 
            View Cart
          </Link>
          </li>
        </ul>
        </nav>
       
      </article>
    </div>
  );
}
