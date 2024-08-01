import React,{useContext, useState} from 'react';
import {ShopContext} from '../context/shopCo';
import './product.css';
const Product = (props) => {
    const{id,name,price,image,description} = props.data;
    const{cartItems , addToCart , removeFromCart} = useContext(ShopContext);

    const isInCart = cartItems?.some((item)=> item.id === id)

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">تومان {price.toLocaleString()} </p>
      </div>
      <div className="product-actions">
      { isInCart && <button className="remove" onClick={()=>removeFromCart(id)}>delete</button> }
      <span className='mx'>{cartItems?.filter((row)=>row.id === id)[0]?.count}</span>

        <button onClick={()=> addToCart(id)} className="add-to-cart">افزودن به سبد خرید</button>

        
      </div>
      
    </div>
  );
};

export default Product;
