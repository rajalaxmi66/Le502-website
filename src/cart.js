import React, { useState } from "react";
import "./cart.css";
const Cart = () => {
  
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h1>Cart</h1>
      <p>Your cart is empty </p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};


export default Cart;
