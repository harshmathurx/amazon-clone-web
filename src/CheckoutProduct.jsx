import React from 'react'
import './checkoutProduct.css';
import { useBasketValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, key}) {

    const [{basket},dispatch] = useBasketValue();

    const removeFromBasket = () => {
        //remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            key: key
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
