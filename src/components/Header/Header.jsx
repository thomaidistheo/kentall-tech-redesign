import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/kentall-tech_logo_hor.png'
import HamMenu from '../../assets/icons/Hamburger_Menu.svg?react'
import HamMenuClose from '../../assets/icons/Hamburger_Menu_Close.svg?react'


import './header.scss'

export default function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

    let handleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

return (
    <div className="navigation-cont">
        <div className="navigation">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

            </div>
            <ul className="nav-items">
                <li className="link-text">
                    <NavLink to="/guides">Guides</NavLink>
                </li>
                <li className="link-text">
                    <NavLink to="/platform-links">Download</NavLink>
                </li>
                <li className="link-text">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="link-text">
                    <NavLink to="/contact" >Contact</NavLink>
                </li>
                <li>    
                <a href="https://www.kentalltrack.com/">
                    <button className="btn btn-primary-red">
                        Live Tracking
                    </button>
                    </a>
                </li>
            </ul>

            <button
                type="button"
                className={`mobile-nav-btn${mobileMenu ? ' pressed' : ''}`}
                aria-label={mobileMenu ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenu}
                onClick={handleMobileMenu}
            >
                {!mobileMenu ? <HamMenu /> : <HamMenuClose />}
            </button>
        </div>

        {mobileMenu ? (
            <div className="mobile-nav">
                <ul className="nav-items">
                    <li className="link-text">
                        <Link to="/about" onClick={() => {handleMobileMenu()}}>About</Link>
                    </li>
                    <li className="link-text"> 
                        <Link to="/contact" onClick={() => {handleMobileMenu()}}>Contact</Link> 
                    </li>
                    <li>    
                        <a href="https://www.kentalltrack.com/">
                            <button className="btn btn-primary-red">
                                Live Tracking
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
            ) : ''
        }
    </div>
  )
}
