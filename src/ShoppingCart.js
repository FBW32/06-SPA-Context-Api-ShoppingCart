import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function ShoppingCart() {

    const { cart, setCart, products, setProducts } = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.inventory, 0);
    let copyCart = [...cart]
    let copyProducts = [...products]

    const removeOne = (recivedItem) => {
        let targetItem = copyCart.find(elem => elem.id === recivedItem.id);
        let originalItem = copyProducts.find(elem => elem.id === recivedItem.id);
        if (targetItem.inventory > 0) {
            targetItem.inventory -= 1;
            originalItem.inventory  += 1;
        }
        if (targetItem.inventory === 0) {
            let index = copyCart.indexOf(targetItem);
            copyCart.splice(index, 1);
        }
        setCart(copyCart);
        setProducts(copyProducts);
    }

    const removeAll = (recivedItem) => {
        let targetItem = copyCart.find(elem => elem.id === recivedItem.id);
        let originalItem = copyProducts.find(elem => elem.id === recivedItem.id);
        let amountReturned = targetItem.inventory;
        originalItem.inventory += amountReturned;
        let index = copyCart.indexOf(targetItem);
        copyCart.splice(index, 1);
        setProducts(copyProducts)
        setCart(copyCart)
    }

    return (

        <div>
            {cart.map(product => (
                <div key={product.id}>
                    <div>
                        <br />
                        {product.title} | {product.price} | {product.inventory}
                        <br />
                        <button style={{ margin: '5px 5px 5px 0', padding: '2px' }} onClick={() => removeOne(product)}>Remove One</button>
                        <button style={{ margin: '5px 5px 5px 0', padding: '2px' }} onClick={() => removeAll(product)}>Remove All</button>
                    </div>
                    <br />
                </div>)
            )}
            <span>Total: $ {totalPrice.toFixed(2)}</span>
            <br />
            <button onClick={() => setCart([])} style={{ margin: '5px 5px 5px 0', padding: '2px' }}>Checkout</button>
        </div>
    )
}
