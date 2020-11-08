import { Link } from '@material-ui/core'
import React, { useState } from 'react'
import "./Login.css"

function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory();
    const [password, setPassword] = useState('');
    const SignIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5 value={email} onChange={e => setEmail(e.target.value)}>E-mail</h5>
                    <input type='text'  />

                    <h5>Password</h5>
                    <input type='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={SignIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    This is a clone app developed by Asif Ahmed. Ths could  be used for studying components and imports
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
