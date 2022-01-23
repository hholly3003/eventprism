import React, { useRef } from 'react';
import Signin from '../components/Login'
import { signInWithEmailAndPassword }from 'firebase/auth'
import { auth } from '../utils/firebase'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    

    const login = async ()=>{
        try{
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then(()=>{
                if(user){
                    window.location = "/dashboard"
                }

            })
        }
        catch(error){
            alert(error.message)
        }
    }
    return <div>
      <Signin
        title = "Login"
        button = "Login"
        href = "/register"
        link = "Register"
        headerStatement = "Need an account?"
        emailInput = {emailRef}
        passwordInput = {passwordRef}
        btnFunction = {login}
      />
  </div>;
}

export default Login;
