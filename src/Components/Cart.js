export default function Cart({total, cart}) {
  return (
  <div>
      <h1>Cart Total</h1>
    <table className="cart-table">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
      </tr>
    </thead>
     <tbody>
    {cart ? cart.map((item) => {
      return(
        <>
      <tr>
        <td>{item.name}</td>
        <td>${item.price}</td>
      </tr>
      <tr>
       
      </tr>
      </>)}) : null}
   </tbody>
   <td>Total ({cart.length} items): <span>${total.toFixed(2)}</span></td>
    </table>
  </div>
  );
}
