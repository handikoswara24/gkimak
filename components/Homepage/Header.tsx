'use client'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY == 0) {
                setScroll(false);
            }
            else {
                setScroll(true);
            }
        })
    }, [])
    return (
        <header className={`header ${scroll ? "scroll-header" : ""}`} id="header">
            <nav className="nav container">
                <img src="/images/logo.png" className="nav__logo" />
                <div className={`nav__menu ${open ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <i className="ri-home-9-line nav__icon"></i>
                            <a href="#" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Discover</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Places</a>
                        </li>
                    </ul>

                    {/* <div className="nav__dark">
                            <span className="change-theme-name">Dark mode</span>
                            <i className="ri-moon-line change-theme" id="theme-button"></i>
                        </div> */}

                    <i className="ri-close-line nav__close" id="nav-close" onClick={() => setOpen(false)}></i>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={() => setOpen(true)}>
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header