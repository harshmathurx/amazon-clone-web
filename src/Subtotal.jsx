import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer.js';
import { useBasketValue } from './StateProvider.js';
import "./Subtotal.css";
function Subtotal() {

    const [{basket},dispatch] = useBasketValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length}): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'/>This order contains a gift
                        </small>
                        
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                items={basket.length}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
