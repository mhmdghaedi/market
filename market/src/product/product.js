import React,{ useState} from 'react';
import './product.css';
const Product = ({ product , addToCart}) => {
    const [products, setProducts] = useState([
    { id: 1, name:  'کفش مردانه', price: 2000000 },
    { id: 2, name: " tuf لپ تاپ ", price: 35000000 },
    { id: 3, name: ' iphone11 گوشی ', price: 40000000 },
    { id:4 , name: 'ماساژور برقی' , price: 550000},
  ]);
  const [cart, setCart] = useState([]);

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">تومان {product.price.toLocaleString()} </p>
      </div>
      <div className="product-actions">
        <button onClick={()=> addToCart(product)} className="add-to-cart">افزودن به سبد خرید</button>
        
      </div>
      
    </div>
  );
};

export default Product;
