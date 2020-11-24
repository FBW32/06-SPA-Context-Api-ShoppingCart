import React,{useContext} from 'react'
import { MyContext } from './ContextFile'

export default function Product() {

  const {products,setProducts,cartItems,setCartItems}=useContext(MyContext);

  const passItemToCart=(product)=>{
    //configure cartitems:
    let otherProductsArray=products.filter(item=>item.name!==product.name)
    let otherCartItemsArray=cartItems.filter(item=>item.name!==product.name)
    
    let productInCart=cartItems.find(cartItem=>cartItem.name===product.name)

    setCartItems([...otherCartItemsArray,{name:product.name,price:product.price,amount:productInCart.amount+1}])
    //configure products:
    setProducts([...otherProductsArray,{name:product.name,price:product.price,amount:product.amount-1}])
  }
    

  return (
    
    products.map(product=>
      {if (product.amount!==0){return <li>
      <h3>{product.name} | {product.price} | x{product.amount}</h3>
      <button style={{display:"block"}}onClick={()=>passItemToCart(product)}>Add to cart</button>
    </li>}
      }
    )
    
  )
}
