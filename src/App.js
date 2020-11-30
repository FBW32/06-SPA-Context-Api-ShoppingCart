import React from "react";
import CartContext from "./CartContext";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import './App.css'

export default function App() {

  const style = { width: "25rem", border: '1px solid grey', padding: '15px', margin: '5rem' }

  return (
    <CartContext>
      <div style={style}>
        <ProductList />
        <ShoppingCart />
      </div>
    </CartContext>
  )
}

