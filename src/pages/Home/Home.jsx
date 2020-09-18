//libraries
import React from 'react'
//components
import Product from '../../components/Product/Product'
//css
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                    alt="main-img"
                />

                <div className="home__row">
                    <Product
                        id="1234948"
                        price={14}
                        title="Product title"
                        image="https://images-na.ssl-images-amazon.com/images/I/71KmDHWshWL._AC_SX425_.jpg"
                        rating={4}
                    />
                    <Product
                        id="1234948"
                        price={14}
                        title="Product title"
                        image="https://images-na.ssl-images-amazon.com/images/I/71KmDHWshWL._AC_SX425_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1234948"
                        price={14}
                        title="Product title"
                        image="https://images-na.ssl-images-amazon.com/images/I/71KmDHWshWL._AC_SX425_.jpg"
                        rating={4}
                    />
                    <Product
                        id="1234948"
                        price={14}
                        title="Product title"
                        image="https://images-na.ssl-images-amazon.com/images/I/71KmDHWshWL._AC_SX425_.jpg"
                        rating={4}
                    />
                    <Product
                        id="1234948"
                        price={14}
                        title="Product title"
                        image="https://images-na.ssl-images-amazon.com/images/I/71KmDHWshWL._AC_SX425_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1234948"
                        price={14}
                        title="Product title"
                        image="https://images-na.ssl-images-amazon.com/images/I/71KmDHWshWL._AC_SX425_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
