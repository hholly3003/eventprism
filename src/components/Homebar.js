import React from 'react'
import '../styles/Homebar.css'
import db, { auth } from "../utils/firebase";

function HomeBar({setIsLogged}) {
    const logout = async ()=>{
        await auth.signOut();
        window.location = "/login";
        setIsLogged(null);
      }

    return (
        <div className='home-bar'>
            <p>Event Finder</p>
            <div className='links'>
                <p>Home</p>
                <p>About</p>
            </div>
            <p onClick={logout} id='logout'>Logout</p>
           
        </div>
    )
}

export default HomeBar