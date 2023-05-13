

export default function Cart({total, cart}) {
  console.log(cart)
  return (
  <div className="cart">
    <h1>Cart</h1>
    {cart ? cart.map((item) => <p>{item.name}</p>) : null}
    <p>Total: ${total.toFixed(2)}</p>
  </div>
  );
}
