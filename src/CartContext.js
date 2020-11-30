import React, { useEffect, useState } from 'react';
import jsonData from './data.json';

export const CartContext = React.createContext(null)

export default function CartProvider({children}) {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        setProducts(jsonData);
    }, [])

    let value = { cart, setCart, products, setProducts }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}