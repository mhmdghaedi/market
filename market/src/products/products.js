import React, { useState }  from 'react';
import Product from '../product/product';
const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };
  const products = [
    {
      id: 1,
      name:  'کفش مردانه',
      price: 2000000,
      image: require('../image/kafsh.jpg'),
      description: 'کفش روزمره مردانه سایز 41-42-43-44',
    },
    {
      id: 2,
      name: " tuf لپ تاپ ",
      price: 35000000 ,
      image: require('../laptap.jpg') ,
      description: ' tuf لپ تاپ گیمینگ ',
    },
    {
        id: 3,
        name: ' iphone11 گوشی ',
        price: 40000000,
        image: require('../image/iphone11.jpg'),
        description: 'آیفون 11 حافظه 128 تک سیمکارت',
      },
      {
        id: 4,
        name: 'ماساژور برقی',
        price: 550000,
        image: require('../image/masazh.jpg'),
        description: 'ماساژور برقی با نوع ماساژ لرزشی-ضربه ای-حرکتی',
      },
  ];

  return (
    <div>
      {products.map((products) => (
        <Product key={products.id} product={products} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;