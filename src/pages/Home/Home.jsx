//libraries
import React from 'react'
//components
import Product from '../../components/Product/Product'
//css
import './Home.css'

const mainProducts = [
    {
        id: '1234948',
        price: 58.95,
        title: 'DualShock 4 Wireless Controller for PlayStation 4 - Magma Red',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg',
        rating: 4,
    },
    {
        id: '14948',
        price: 379.99,
        title: 'Darksiders Genesis - Nephilim Edition - PC Nephilim Edition',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61By0A78n%2BL._SL1081_.jpg',
        rating: 5,
    },
    {
        id: '141344948',
        price: 43.56,
        title: 'Sega Genesis Mini - Genesis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51wZ3cmIyOL.jpg',
        rating: 5,
    },
    {
        id: '141344948',
        price: 16.99,
        title:
            'PICTEK Gaming Mouse Wired, RGB Chroma Backlit Gaming Mouse, 8 Programmable Buttons, 7200 DPI Adjustable, Comfortable Grip Ergonomic Optical PC Computer Gaming Mice with Fire Button, Sega Genesis Acces',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61d9C4yCB2L._AC_SL1000_.jpg',
        rating: 4,
    },
    {
        id: '1413000948',
        price: 36.98,
        title:
            'Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg',
        rating: 4,
    },
    {
        id: '77324248',
        price: 899.99,
        title:
            'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71cWNfXecfL._AC_SL1500_.jpg',
        rating: 5,
    },
]

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
                    <Product {...mainProducts[0]} />
                    <Product {...mainProducts[1]} />
                </div>

                <div className="home__row">
                    <Product {...mainProducts[2]} />
                    <Product {...mainProducts[3]} />
                    <Product {...mainProducts[4]} />
                </div>

                <div className="home__row">
                    <Product {...mainProducts[5]} />
                </div>
            </div>
        </div>
    )
}

export default Home
