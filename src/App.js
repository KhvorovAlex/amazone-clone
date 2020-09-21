//libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//context
import { useStateValue } from './context/StateProvider'
//css
import './App.css'
//db
import { auth } from './firebase'
//payment
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
//components
import Header from './components/Header/Header'
import Checkout from './pages/Checkout/Checkout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'

const promise = loadStripe(
    'pk_test_51HSz3yDkJHSjal4Uov4qdlodhV8s9JMRdZIAT6dj0hrU7OdxxN4F8z2gUrS4KLggNHmFVCWVYcPGIC7At1yKRO1i00bz3pZo4R',
)

function App() {
    const [, dispatch] = useStateValue()

    React.useEffect(() => {
        //при превом рендере спрашиваем запрашиваем в ДБ
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //если юзер залогинен
                //пушим данные юзера в стейт
                dispatch({ type: 'SET_USER', user: authUser })
            } else {
                //если юзер НЕ залогинен
                //пушим null в стейт
                dispatch({ type: 'SET_USER', user: null })
            }
        })
    }, [dispatch])

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
