import React, { useEffect, useState } from 'react'
import "./Payment.css";
import { useBasketValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct"
import { Link } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from 'axios';
function Payment() {
    const [{ basket, user }, dispatch] = useBasketValue();

    const [error, setError] = useState(null);
    const [displayed, setDisplayed] = useState(true);

    const [succeded,setSuccded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [disabled,setDiabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        //generate stripe payment that allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios;
        }

        getClientSecret();
    },[basket])

    const handleSubmit = (event) => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe
    }

    const handleChange = (event) => {
        setDisplayed(event.empty);
        setError(event.error ? event.error.message : "");
    }
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
                        <form action="" onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={0}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                    items={basket.length}
                                />
                                <button disabled={processing || disabled || succeded}>
                                    <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                            
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
