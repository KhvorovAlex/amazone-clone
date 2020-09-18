//libraries
import React from 'react'
import Subtotal from '../../components/Subtotal/Subtotal'
//css
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://biomedic.co.il/wp-content/uploads/2016/08/checkout-banner.png"
                    alt="checkout"
                />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
