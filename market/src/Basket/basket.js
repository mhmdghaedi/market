/* eslint-disable array-callback-return */
import React, {  useState } from "react";
import './basket.css';
import Cart from "../cart/cart";

const Basket = ()=>{
  const [cart, setCart] = useState([]);
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return(
    <div className="basket">
      <Cart cart={cart} removeFromCart={removeFromCart}/>
    </div>
  )
}
export default Basket;