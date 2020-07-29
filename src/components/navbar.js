import React, { useState } from 'react'
import "./navbar.style.css"

export default function NavBar() {

    const [offcanvasMenu, setOffcanvas] = useState(false)

    const toggleMenu = () => {
        setOffcanvas(!offcanvasMenu)
        console.log( 'test', offcanvasMenu)
    }

    return(
        <div>
            <header className="navbar">
                <div>
                    <button className="burger-icon"
                        onClick={toggleMenu}>
                    </button>
                </div>
                <div className="navbar-logo">
                    logo
                </div>
            </header>
            <div className="offcanvas-menu"
            style= {offcanvasMenu ? {display: 'block', animation: 'slide 0.5s'} : {animation:'reverse-slide 0.5s', width: 0}}>
                <div className="close-menu-container">
                    <button className="close-menu-icon"
                        onClick={toggleMenu}
                        >

                    </button>
                </div>
            </div>

        </div>
    )
}