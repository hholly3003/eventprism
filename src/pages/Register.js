import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useRef} from 'react';
import Signin from '../components/Login'
import {auth} from '../utils/firebase'
import db from '../utils/firebase'
import { doc , setDoc } from 'firebase/firestore'

function Register() {
    // Hold two useRef
    const emailRef = useRef()
    const passwordRef = useRef()

    // Create a function that registers the new user
    const register = async ()=>{
        try 
        {
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)

            // Maybe create an api call to firestore for adding data into database, users collection
            .then(async (cred)=>{
                // Create a document for the user using the credential
                await setDoc(doc(db,"users",`${cred.user.uid}`),
                {
                    //Pass in the payload
                    events: [
                      {
                        name: "This is a dummy event"  
                      },
                    ]
                })
                // When there is a user, send to dashboard route
                if(cred){
                    window.location = "/dashboard";
                }
            });
        }
        catch(error){
            alert(error.message)
        }
    }
    return (
        <div>
            <Signin
                title = "Register"
                button = "Create Account"
                href = "/login"
                link = "Login"
                headerStatement = "Already have an account?"
                emailInput = {emailRef}
                passwordInput = {passwordRef}
                btnFunction = {register}
            />
        </div>
    )
}

export default Register;
