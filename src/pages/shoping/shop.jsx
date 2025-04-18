import React, { useContext } from "react";
import CartContext from "./CartContext";
import './app.css';

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (name, price) => {
    addToCart({ name, price });
    // window.alert(`${name} added to cart`);
  };

  return (  
    <div>
      <img src="https://clebonplan.com/wp-content/uploads/2023/03/iphone-samsung-compare-1-1024x1024.webp" alt="phones" />
      
      <button onClick={() => handleAdd("Samsung", 95000)} id="samsung">Add Samsung (INR95000)</button>
      <button onClick={() => handleAdd("Apple", 122000)} id="apple">Add Apple (INR122000)</button>
    </div>
  );
};

export default Shop;
