import React, { useState } from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //Implement Firebase Login
    }

    const register = e =>{
        //Firebase registration
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" className='login__logo' />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree you are a cutie and understand this is not intended to copy Amazon's technology. It is purely for practise purpose.
                </p>
                <button className='login__registerButton' onClick={register}>Create an account</button>
            </div>
        </div>
    )
}

export default Login;
