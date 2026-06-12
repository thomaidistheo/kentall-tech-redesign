'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import logo from '../../assets/kentall-tech_logo_hor.png'
import HamMenu from '../../assets/icons/Hamburger_Menu.svg?react'
import HamMenuClose from '../../assets/icons/Hamburger_Menu_Close.svg?react'


import './header.scss'

function NavItem({ href, children }) {
    const pathname = usePathname()

    return (
        <Link href={href} className={pathname === href ? 'active' : ''}>
            {children}
        </Link>
    )
}

export default function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

    let handleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

return (
    <div className="navigation-cont">
        <div className="navigation">
            <div className="logo">
                <Link href="/">
                    <Image src={logo} alt="KentallTech logo" priority />
                </Link>

            </div>
            <ul className="nav-items">
                <li className="link-text">
                    <NavItem href="/guides">Guides</NavItem>
                </li>
                <li className="link-text">
                    <NavItem href="/platform-links">Download</NavItem>
                </li>
                <li className="link-text">
                    <NavItem href="/about">About</NavItem>
                </li>
                <li className="link-text">
                    <NavItem href="/contact">Contact</NavItem>
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
                        <Link href="/about" onClick={() => {handleMobileMenu()}}>About</Link>
                    </li>
                    <li className="link-text">
                        <Link href="/contact" onClick={() => {handleMobileMenu()}}>Contact</Link>
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
