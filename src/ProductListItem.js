import React, {useContext} from 'react'
import { CartContext } from './CartContext'

export default function ProductListItem(props) {    

    const {cart,setCart, setProducts, products} = useContext(CartContext)

    const addToCart = (reciveItem) => {

        let copyCard = [...cart]
        let copyProducts = [...products]

        let prodId = copyProducts.find(elem=>elem.id===reciveItem.id)
        let index = copyProducts.indexOf(prodId)
        prodId.inventory= prodId.inventory - 1
        copyProducts.splice(index, 1, prodId)
        setProducts(copyProducts)

        if (cart.includes(reciveItem)) {            
            let item = copyCard.find(elem=>elem.id===reciveItem.id)
            let index = copyCard.indexOf(item)
            item.number = item.number + 1
            copyCard.splice(index, 1, item)     
            setCart(copyCard)       
        } else {
            setCart([...cart, reciveItem])
        }
    }

    return (
        <div>
            <br/>
            {props.item.title} | {props.item.price} | {props.item.inventory}
            <br/>
            <button style={{margin:'5px 5px 5px 0', padding:'2px'}} onClick={()=>addToCart(props.item)} disabled={props.item.inventory===0}>{props.item.inventory===0 ? 'Sold Out' : 'Add Item'}</button>
        </div>
    )
}

