//libraries
import React from 'react'
import { Link } from 'react-router-dom'
//context
import { useStateValue } from '../../context/StateProvider'
//css
import './Payment.css'
//components
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
//payment
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form>
                            <CardElement />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
