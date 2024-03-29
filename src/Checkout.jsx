import React from 'react'
import './Checkout.css';
import { useBasketValue } from './StateProvider';
import Subtotal from "./Subtotal.jsx";
import CheckoutProduct from './CheckoutProduct';
import FlipMove from "react-flip-move";
function Checkout() {
    const [{ basket, user }, dispatch] = useBasketValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpeg" alt="" className='checkout__ad' />

                <div>
                    <h3>Hi, {user ? user.email : "Guest"}</h3>
                    <h2 className='checkout__title'>Your shopping basket</h2>
                    <div>
                        {basket.map(item => (
                            <CheckoutProduct key={item.key} title={item.title} rating={item.rating} image={item.image} price={item.price} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
