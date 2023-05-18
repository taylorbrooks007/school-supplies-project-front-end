import { Link } from "react-router-dom";
import React from 'react';


export default function Supply({ supply, handleCartTotal }) {
  return (
    <div className="card">
      <Link className="product" to={`/supplies/${supply.id}`}>
      <img alt={supply.name} src={supply.image_url}/>
      <h2 >{supply.name}</h2>
      </Link>
      <p className="product-price">
      ${supply.price}
      </p>
      {supply.in_stock ? (<p className="in_stock">in stock</p>): (<p className="out_stock">out of stock</p>)}
      <button onClick={() => handleCartTotal(supply.price, supply)}>
        Add To Cart
      </button>
     
    </div>
  );
}
