import React, { useContext } from 'react'
import ProductListItem from './ProductListItem'
import {CartContext} from  './CartContext'

export default function ProductList() {

    const {products} = useContext(CartContext)

    return (
        <div>
            {
                products &&
                products.map(item => (
                    <ProductListItem item={item} key={item.id} />
                ))
            }
            <br/>
            <hr/>
            <br/>
        </div>
    )
}