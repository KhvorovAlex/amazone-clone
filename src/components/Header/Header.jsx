//libraRIES
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
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
    const history = useHistory()

    const handleAuthentification = () => {
        if (user) {
            //если User залогинен, делаем logout
            auth.signOut()
            history.push('/')
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://dhjhkxawhe8q4.cloudfront.net/kensington-books-publishing-wp/wp-content/uploads/sites/3/2020/04/24132249/amazon_logo_RGB_REV.png"
                    alt="logo"
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user ? '/login' : ''}>
                    <div onClick={handleAuthentification} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user ? user.email : 'Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <Link to={user ? '/orders' : ''}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

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
