//libraries
import React from 'react'
//context
import { useStateValue } from '../../context/StateProvider'
//css
import './Product.css'
//img
import StarBorderIcon from '@material-ui/icons/StarBorder'

function Product({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue()

    const addToBasket = () => {
        //добавляем товар в корзину
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <StarBorderIcon key={index} />
                        ))}
                </div>
            </div>

            <img src={image} alt={title} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
