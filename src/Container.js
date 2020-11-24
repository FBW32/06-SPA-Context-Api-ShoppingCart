import React,{useState,useEffect} from 'react'
import { MyContext } from './ContextFile'

export default function Container(props) {
  const [products,setProducts]=useState([])
  const [cartItems,setCartItems]=useState([])

  const currentProducts=[
      {name:"iPad 4 Mini",price:500.01,amount:2},
      {name:"H&M T-Shirt White",price:10.99,amount:10},
      {name:"Charli XCX-Sucker CD",price:19.99,amount:5}
    ]
  const initialCartItems=[];
  currentProducts.map(product=>{initialCartItems.push({name:product.name,price:product.price,amount:0})})

  useEffect(()=>setProducts(currentProducts),[])
  useEffect(()=>setCartItems(initialCartItems),[])
  
  return (
    <MyContext.Provider value={{products,setProducts,cartItems,setCartItems}}>
      {props.children}
    </MyContext.Provider>
  )
}
