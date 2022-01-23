import React from 'react'
import '../styles/Homebar.css'
function HomeBar() {
    return (
        <div className='home-bar'>
            <p>Event Finder</p>
            <div className='links'>
                <p>Home</p>
                <p>About</p>
            </div>
            <p>Logout</p>
        </div>
    )
}

export default HomeBar

