import React, { useRef, useState } from "react";
import Signin from "../components/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState({});

  const login = async () => {
    // Find out how to limit only for authenticated user who can access dashboard.
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then(() => {
        if (user) {
          window.location = "/";
        } else {
          alert.message("Please sign in first");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <Signin
        title="Login"
        button="Login"
        href="/register"
        link="Register"
        headerStatement="Need an account?"
        emailInput={emailRef}
        passwordInput={passwordRef}
        btnFunction={login}
      />
    </div>
  );
}

export default Login;
