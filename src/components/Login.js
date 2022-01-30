import React from 'react';
import logo from'../images/image.png'
import '../styles/Login.css';

function Login({title, button, href, link, headerStatement, emailInput, passwordInput, btnFunction}) {
  return(
    <div className='login'>
      <div className='logo-container'>
        <img src={logo} id="logo-login"/>
      </div>
      <div className='login-container'>
        <h1 className='login-heading'>{title}</h1>
        <input ref={emailInput} className='login-email' type="email" placeholder='Email'/>
        <input ref={passwordInput} className='login-password' type="password" placeholder='Password'/>
        <button onClick={btnFunction} className='login-button'>{button}</button>
        <div className='links'>
          <p>{headerStatement}</p>
          <a href={href}>{link}</a>
        </div>
      </div>
    </div>
  )
}

export default Login;
