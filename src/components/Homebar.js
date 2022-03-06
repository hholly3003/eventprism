import React from 'react'
import '../styles/Homebar.css'
import db, { auth } from "../utils/firebase";
import logo from'../images/image.png'
function HomeBar({setIsLogged}) {
    const logout = async ()=>{
        await auth.signOut();
        window.location = "/login";
        setIsLogged(null);
      }
    const redirectDashboard = () => {
        window.location = '/dashboard';  
    }
    const redirectAbout = () => {
        window.location = "/aboutpage";
    }


    return (
        <div className='home-bar'>
            <div className='main-container'>
                <div className='logo-homebar'>
                    <img src={logo} id="logo" onClick={redirectDashboard}/>
                </div>
                <div className='links-bar'>
                    <button className='btn-d' onClick={redirectDashboard}>Home</button>
                    <button className='btn-d' onClick={redirectAbout}>About</button>
                </div>
            </div>
            <div className='button-container'>
                    <button onClick={logout} className='btn-d' id='logout'>Logout</button>
            </div>
        </div>
    )
}

export default HomeBar