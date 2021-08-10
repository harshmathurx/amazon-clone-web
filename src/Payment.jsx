import React from 'react'
import "./Payment.css";
import { useBasketValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct"
import { Link } from 'react-router-dom';
function Payment() {

    const [{ basket, user }, dispatch] = useBasketValue();

    return (
        <div className='payment'>

            <h1 >Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

            <div className="payment__container">
                {/* Payment section - delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Javascript town, AR</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.key}
                                title={item.title}
                                rating={item.rating}
                                image={item.image}
                                price={item.price} />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe payment method1 */}
                    </div>
                </div>
                {/* REview Items */}

                {/* payment method */}
            </div>
        </div>
    )
}

export default Payment
