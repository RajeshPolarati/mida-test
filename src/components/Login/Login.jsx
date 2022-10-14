import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='login'>
        <div className='logo'>Logo</div>
        <div className='login-text'>Sign in to</div>
        <div className='company-name'>Westagilelabs</div>
        <div className='login-email'>
            <div className='email'>Company email id</div>
            <input type="email" name="Email" placeholder='Enter your company email id' />
        </div>
        <div className='login-password'>
            <div className='password'>Password</div>
            <input type="password" name="Password" placeholder='Enter your password' />
        </div>

        <div className='login-button'>
            <button className='login-btn'><a href='mida-mobile-feat-login' target="_self">Login</a></button>
        </div>
    </div>
  )
}

export default Login