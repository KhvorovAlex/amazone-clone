//libraries
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import axios from '../../API/axios'
//context
import { useStateValue } from '../../context/StateProvider'
import { getBasketTotal } from '../../reducer/reducer'
//css
import './Payment.css'
//components
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
//payment
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
//db
import { db } from '../../firebase'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()

    const [succeeded, setSucceeded] = React.useState(false)
    const [processing, setProcessing] = React.useState('')

    const [error, setError] = React.useState(null)
    const [disabled, setDisabled] = React.useState(true)
    const [clientSecret, setClientSecret] = React.useState(true)

    React.useEffect(() => {
        // Generate the special stripe secret which allows
        // us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    }, [basket])

    console.log('THE SECRET IS >>>>> ', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)

        await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                //Когда ответит сервер добавляем заказы в БД
                db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    })

                setSucceeded(true)
                setError(null)
                setProcessing(false)

                dispatch({ type: 'EMPTY_BASKET' })

                history.replace('/orders')
            })
    }

    const handleChange = (event) => {
        console.log(event)
        // Listen for changes in the CardElement
        // and display any errors as the customer types their cart details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }

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
                        {user && <small>введите тестовые данные 42424242...4242424</small>}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => <h3>Order total: {value}</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>

                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
