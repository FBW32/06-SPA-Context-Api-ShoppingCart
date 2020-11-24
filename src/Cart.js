import React,{useContext} from 'react'
import { MyContext } from './ContextFile'

export default function Cart() {

  const {cartItems,setCartItems,products,setProducts}=useContext(MyContext)

  const removeOne=(product)=>{
    //configure cartitems:
    let otherProductsArray=products.filter(item=>item.name!==product.name)
    let otherCartItemsArray=cartItems.filter(item=>item.name!==product.name)

    let productInProducts=products.find(productsItem=>productsItem.name===product.name)

    setProducts([...otherProductsArray,{name:product.name,price:product.price,amount:productInProducts.amount+1}])

    setCartItems([...otherCartItemsArray,{name:product.name,price:product.price,amount:product.amount-1}])
  
  }
  const removeAll=(product)=>{
    //configure cartitems:
    let otherProductsArray=products.filter(item=>item.name!==product.name)
    let otherCartItemsArray=cartItems.filter(item=>item.name!==product.name)

    let productInProducts=products.find(productsItem=>productsItem.name===product.name)

    setProducts([...otherProductsArray,{name:product.name,price:product.price,amount:productInProducts.amount+product.amount}])

    setCartItems([...otherCartItemsArray,{name:product.name,price:product.price,amount:0}])
  
  }
  //calc totalPrice:
    let total=0;
    cartItems&& cartItems.map(item=>
      total+=item.price*item.amount
    )
    let fixedTotal=total.toFixed(2)

  return (
    <>
      {cartItems.map(cartItem=>
      {if(cartItem.amount!==0){
        return <li>
          <h3>{cartItem.name} | {cartItem.price} | x{cartItem.amount}</h3>
          <button onClick={()=>removeOne(cartItem)}>Remove One</button>
          <button 
          onClick={()=>removeAll(cartItem)}
          >Remove All</button>
        </li>}
        })}
      <h3>Total: ${fixedTotal}</h3>
      <button>Checkout</button>
     </>  
  )
}
