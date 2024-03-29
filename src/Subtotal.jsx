import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './Reducer.js';
import { useBasketValue } from './StateProvider.js';
import "./Subtotal.css";
function Subtotal() {

    const history = useHistory();
    const [{basket},dispatch] = useBasketValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'/>This order contains a gift
                        </small>
                        
                    </>
                )}
                decimalScale={0}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                items={basket.length}
            />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
