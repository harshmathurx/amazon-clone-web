import React, { useEffect, useState } from 'react'
import "./Payment.css";
import { useBasketValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct"
import { Link, useHistory } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import {db} from "./firebase";
import axios from 'axios';
function Payment() {
    const [{ basket, user }, dispatch] = useBasketValue();
    const history = useHistory();
    const [error, setError] = useState(null);

    const [succeded,setSuccded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        //generate stripe payment that allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url: '/payment/create?total=' + (getBasketTotal(basket) * 100)
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    },[basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => { 
            
            db.collection('users').doc(user?.uid).collections('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSuccded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })
    }

    const handleChange = (event) => {
        setDisabled(event.empty);
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
