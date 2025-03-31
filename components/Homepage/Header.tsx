'use client'
import React, { useEffect, useState } from 'react'
import ThemeButton from './ThemeButton';

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
            <nav className="nav container-custom">
                <img src="/images/logo.png" className="nav__logo" />
                <div className={`nav__menu ${open ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link active-link">
                                <span className="nav__name">Home</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="about.html" className="nav__link">
                                <span className="nav__name">Tentang</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="devotion.html" className="nav__link">
                                <span className="nav__name">Renungan</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="warta.html" className="nav__link">
                                <span className="nav__name">Warta</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="https://youtube.com/@GKImAmanat/streams" className="nav__link">
                                <span className="nav__name">Live</span>
                            </a>
                        </li>
                    </ul>

                    <ThemeButton />
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