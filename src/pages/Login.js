import React, { useRef } from 'react';
import Signin from '../components/Login'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    return <div>
      <Signin
        title = "Login"
        button = "Login"
        href = "/register"
        link = "Register"
        headerStatement = "Need an account?"
        emailInput = {emailRef}
        passwordInput = {passwordRef}
        btnFunction = ""
      />
  </div>;
}

export default Login;
