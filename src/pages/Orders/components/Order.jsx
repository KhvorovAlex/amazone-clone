//libraries
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import moment from 'moment'
//css
import './Order.css'
//components
import CheckoutProduct from '../../../components/CheckoutProduct/CheckoutProduct'

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('Do MMMM YYYY, HH:mma')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item, index) => (
                <CheckoutProduct
                    key={`${item.id}_${index}`}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => <h3 className="order__total">Order total: {value}</h3>}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order
