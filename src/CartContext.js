import React, {useState} from 'react'

export const CartContext = React.createContext(null)

export default function CartProvider(props){

    const [products, setProducts] = useState([
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, 'number': 1},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, 'number': 1},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, 'number': 1}
      ])

    const [cart, setCart] = useState([])

    return(
        <CartContext.Provider value={{cart, setCart, products, setProducts}}>
            {props.children}
        </CartContext.Provider>
    )
}
