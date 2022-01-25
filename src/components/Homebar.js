import React from 'react'
import '../styles/Homebar.css'
function HomeBar({text, btnFunction}) {
    return (
        <div className='home-bar'>
            <p>Event Finder</p>
            <div className='links'>
                <p>Home</p>
                <p>About</p>
            </div>
            <p onClick={btnFunction}>{text}</p>
           
        </div>
    )
}

export default HomeBar