import React, { useContext } from "react";
import Products from '../Products/products';
import { ShopContext } from "../context/shopCo";
import Product from "../product/product";

function Cart({ cart, removeFromCart }) {
  const {cartItems} = useContext(ShopContext);
    return (
      <React.Fragment>
        <h2>Basket Shopping</h2>
        <div className="row">
          {Products.map((p)=>{
            if(cartItems.some((i)=>i.id === p.id && i.count > 0))
              return(
            <Product date={p}>
              
            </Product>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
export default Cart;  