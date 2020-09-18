//libraries
import React from 'react'
//css
import './Product.css'
//img
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { useStateValue } from '../../context/StateProvider'

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue()

    const addToBasket = () => {
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
            <div className="produt__info">
                <p>{title}</p>
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
