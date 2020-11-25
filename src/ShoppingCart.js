import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from './CartContext'

export default function ShoppingCart() {

    const {cart, setCart, products, setProducts} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.number, 0)
        setTotal(totalPrice)
       
    }, [cart])

    const removeOne = (reciveItem) =>{

        let copyCard = [...cart]

        let item = copyCard.find(elem=>elem.id===reciveItem.id)
        let index = copyCard.indexOf(item)

        if(reciveItem.number===1){
        copyCard.splice(index, 1)
        }else{
        item.number = item.number - 1
        copyCard.splice(index, 1, item)  
        } 

        let copyProducts = [...products]

        let prodId = copyProducts.find(elem=>elem.id===reciveItem.id)
        let indexP = copyProducts.indexOf(prodId)
        prodId.inventory = prodId.inventory + 1
        copyProducts.splice(indexP, 1, prodId)

        setProducts(copyProducts)               
        setCart(copyCard)
    }

    const removeAll = (reciveItem) =>{
        let copyCard = [...cart]
        let copyProducts = [...products]

        let item = copyCard.find(elem=>elem.id===reciveItem.id)            
        let index = copyCard.indexOf(item)
        copyCard.splice(index, 1)            

        let prodId = copyProducts.find(elem=>elem.id===reciveItem.id)
        let indexP = copyProducts.indexOf(prodId)
            
        prodId.inventory = prodId.inventory + reciveItem.number
        prodId.number=1
        copyProducts.splice(indexP, 1, prodId)

        setProducts(copyProducts)
        setCart(copyCard)
    }    

    return (
    
        <div>            
            {cart.map(product => {
                return(
                    <div>  
                        <div>
                            <br/>
                            {product.title} | {product.price} | {product.number}
                            <br/>
                            <button style={{margin:'5px 5px 5px 0', padding:'2px'}} onClick={()=>removeOne(product)}>Remove One</button>
                            <button style={{margin:'5px 5px 5px 0', padding:'2px'}}  onClick={()=>removeAll(product)}>Remove All</button>
                        </div>                      
                        <br/>                        
                    </div>                    
                )
            })}
            <span>Total: $ {total}</span>
            <br/>
            <button onClick={()=>setCart([])} style={{margin:'5px 5px 5px 0', padding:'2px'}}>Checkout</button>
        </div>
    )
}
