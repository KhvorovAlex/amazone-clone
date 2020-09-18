//libraries
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
//db
import { auth } from '../../firebase'
//css
import './Login.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const signIn = (e) => {
        //вход пользователя
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //если пользователь ввел все верно переносим на главную
                history.push('/')
            })
            .catch((error) => alert(error.message))
    }

    const register = (e) => {
        // регистрация пользователя
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //если регистрация прошла успешно
                if (auth) {
                    //переводим нового пользователя на главную
                    history.push('/')
                }
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://images.squarespace-cdn.com/content/v1/532635b2e4b074f7f885535d/1561686188258-THGBKBHKPUY7V45HRYNO/ke17ZwdGBToddI8pDm48kPHGS5U4IFINSV_My00odPNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIT1n-HcSrt11KpukM3NdmaVg7q5CbSoCpX2OWUsG_qzA/kisspng-logo-amazon-com-transparency-vector-graphics-image-videokurs-online-einkaufen-senior-surfer-5c778c9d474370.3369391515513386532919.png"
                    alt="logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={signIn} className="login__signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in agree to the AMAZONE FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
