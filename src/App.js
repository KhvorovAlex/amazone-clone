//libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//context
import { useStateValue } from './context/StateProvider'
//css
import './App.css'
//db
import { auth } from './firebase'
//components
import Header from './components/Header/Header'
import Checkout from './pages/Checkout/Checkout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
    const [{}, dispatch] = useStateValue()

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
    }, [])

    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
