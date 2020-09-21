//libraries
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
//context
import { useStateValue } from '../../context/StateProvider'
//selector
import { getBasketTotal } from '../../reducer/reducer'
//css
import './Subtotal.css'

function Subtotal() {
    const history = useHistory()
    const [{ basket, user }] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button disabled={!user} onClick={(e) => history.push('/payment')}>
                Продолжить оформление
            </button>
            {!user && (
                <small className="subtotal__info">
                    покупки могут совершать, только зарегестрированные пользователи
                </small>
            )}
        </div>
    )
}

export default Subtotal
