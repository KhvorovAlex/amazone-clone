//libraRIES
import React from 'react'
import { Link } from 'react-router-dom'
//context
import { useStateValue } from '../../context/StateProvider'
//db
import { auth } from '../../firebase'
//css
import './Header.css'
//img
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    const [{ basket, user }] = useStateValue()

    const handleAuthentification = () => {
        if (user) {
            //если User залогинен, делаем logout
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://images.squarespace-cdn.com/content/v1/532635b2e4b074f7f885535d/1561686188258-THGBKBHKPUY7V45HRYNO/ke17ZwdGBToddI8pDm48kPHGS5U4IFINSV_My00odPNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIT1n-HcSrt11KpukM3NdmaVg7q5CbSoCpX2OWUsG_qzA/kisspng-logo-amazon-com-transparency-vector-graphics-image-videokurs-online-einkaufen-senior-surfer-5c778c9d474370.3369391515513386532919.png"
                    alt="logo"
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentification} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user ? user.email : 'Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
