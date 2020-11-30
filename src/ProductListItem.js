import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function ProductListItem({ item }) {

    const { cart, setCart, setProducts, products } = useContext(CartContext)
    const style = { margin: '5px 5px 5px 0', padding: '2px' }

    let copyProducts = [...products];

    const addToCart = (recivedItem) => {
        let sourceItem = copyProducts.find(elem => elem.id === recivedItem.id);
        let itemAlreadyInCart = cart.find(item => item.id === recivedItem.id && item.inventory > 0);
        let cloneItem = { ...sourceItem };

        if (itemAlreadyInCart) {
            let existingItem = cart.find(elem => elem.id === recivedItem.id);
            sourceItem.inventory -= 1;
            existingItem.inventory += 1;
        } else {
            cloneItem.inventory = 1;
            setCart([...cart, cloneItem]);
            sourceItem.inventory -= 1;
        }
        setProducts(copyProducts);
    }

    return (
        <div>
            <br />
            {item.title} | {item.price} | {item.inventory}
            <br />
            <button
                style={style}
                disabled={item.inventory === 0}
                onClick={() => addToCart(item)}
            >
                {item.inventory === 0 ? 'Sold Out' : 'Add Item'}
            </button>
        </div>
    )
}

