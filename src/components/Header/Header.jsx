import React, { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/kentall-tech_logo_hor.png'
// import hamMenu from '../../assets/icons/Hamburger_Menu.png'
import { ReactComponent as HamMenu } from '../../assets/icons/Hamburger_Menu.svg'
import { ReactComponent as HamMenuClose } from '../../assets/icons/Hamburger_Menu_Close.svg'


import './header.css'

export default function Header() {

    const mobileBtn = useRef("")
    const [mobileMenu, setMobileMenu] = useState(false)

    let handleMobileMenu = () => {
        if (mobileMenu) {
            setMobileMenu(false)
            mobileBtn.current.classList.remove('pressed')
        } else {
            setMobileMenu(true)
            mobileBtn.current.classList.add('pressed')
        }
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
                    <NavLink to="/contact" >Contact</NavLink>
                </li>
                <li className="link-text">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>    
                <a href="https://www.kentalltrack.com/">
                    <button className="btn btn-primary-red">
                        Live Tracking
                    </button>
                    </a>
                </li>
            </ul>

            <div className="mobile-nav-btn" ref={mobileBtn} onClick={() => {handleMobileMenu()}}>
                {!mobileMenu ? <HamMenu /> : <HamMenuClose />}
            </div>
        </div>

        {mobileMenu ? (
            <div className="mobile-nav">
                <ul className="nav-items">
                    <li className="link-text"> 
                        <Link to="/contact">Contact</Link> 
                    </li>
                    <li className="link-text">
                        <Link to="/about">About</Link>
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
