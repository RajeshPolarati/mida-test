import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='login'>
        <div className='logo'>Logo</div>
        <div className='login-text'>Company Sign In</div>
        <div className='login-button'>
            <button className='login-btn'><a href='https://mida-dev.logicloop.io/be/auth/signin/saml' target="_self">Login</a></button>
        </div>
    </div>
  )
}

export default Login