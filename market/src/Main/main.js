import React  from "react";
import './main.css';
import Products from '../Products/products';
import Product from "../product/product";
const Main = () => {
    return(
        <React.Fragment>
            <div className="Main">
                {Products.map((productData)=>{
                    return(
                        <Product key={productData.id} data={productData}/>
                    )
                })}
            </div>
        </React.Fragment>
    );
}
export default Main;