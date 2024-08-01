import React, {createContext,useState} from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemid) =>{
        if( !cartItems?.find((item)=> item.id ===itemid))
            setCartItems([...cartItems , {id: itemid , count : 1}])
        else
        setCartItems(cartItems.map((item)=>{
           if(item.id ===itemid)
           return{...item , count: item.count + 1}
        else return item
        }))

    }

    
    const removeFromCart =(itemid)=>{
        setCartItems(cartItems.map ((i)=>{
            if(i.id === itemid)
            return {...i , count : i.count === 0 ? 0 : i.count- 1}
        else return i;
        }))
    }
    const contextValue = {cartItems,addToCart,removeFromCart}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}