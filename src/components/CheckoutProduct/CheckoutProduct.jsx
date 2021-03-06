//libraries
import React from 'react'
//context
import { useStateValue } from '../../context/StateProvider'
//css
import './CheckoutProduct.css'
//img
import StarBorderIcon from '@material-ui/icons/StarBorder'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [, dispatch] = useStateValue()

    const removeFromBasket = () => {
        //уддаляем товар из корзины
        dispatch({ type: 'REMOVE_FROM_BASKET', id: id })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <StarBorderIcon key={index} />
                        ))}
                </div>
                {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
            </div>
        </div>
    )
}

export default CheckoutProduct
