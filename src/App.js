import React from "react";
import CartProvider from "./CartContext";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import './App.css'

export default function App() {
  return (

    <CartProvider>
      <div style={{ width: "25rem", border: '1px solid grey', padding: '15px', margin: '5rem' }}>          
        <ProductList/>
        <ShoppingCart />
      </div>
    </CartProvider>
  )
}

