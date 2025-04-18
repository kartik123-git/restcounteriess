import React, { useState, useContext } from "react";
import CartProvider from "./CartProvider";
import Shop from "./shop";
import Cart from "./cart";
import CartContext from "./CartContext";
import './app.css';

const Navbar = ({ onCartClick }) => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">Shopping</a>
      <a href="#" onClick={onCartClick}>
        Cart ({cart.length})
      </a>
    </div>
  );
};

const AppContent = ({ showCart }) => (
  <div className="container">
    <div className="btn">
      <Shop />
    </div>
    {showCart && (
      <div className="cart">
        <Cart />
      </div>
    )}
  </div>
);

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = (e) => {
    e.preventDefault();
    setShowCart((prev) => !prev);
  };

  return (
    <CartProvider>
      <div className="maincon">
        <Navbar onCartClick={toggleCart} />
        <AppContent showCart={showCart} />
      </div>
    </CartProvider>
  );
};

export default App;
