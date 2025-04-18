import React, { useContext } from "react";
import CartContext from "./CartContext";
import './app.css'

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <h3>Total:{total}</h3>
      <button className="PlaceOrder">Place Order</button>
    </div>
  );
};

export default Cart;
