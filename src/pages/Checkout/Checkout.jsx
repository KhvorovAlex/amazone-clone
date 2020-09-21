//libraries
import React from 'react'
import Subtotal from '../../components/Subtotal/Subtotal'
//context
import { useStateValue } from '../../context/StateProvider'
//css
import './Checkout.css'
//components
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'

function Checkout() {
    const [{ basket, user }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://optilead.co.uk/wp-content/uploads/2014/08/Retail_banner.png"
                    alt="checkout"
                />
                <div>
                    <h3>Hello, {user ? user.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
                {basket.map((item, index) => (
                    <CheckoutProduct
                        key={`${item.id}_${index}`}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
