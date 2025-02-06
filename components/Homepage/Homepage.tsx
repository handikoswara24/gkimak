'use client'

import { ListRenungan } from '@/types/renunganharian'
import { SettingType } from '@/types/setting'
import React, { useEffect, useState } from 'react'
import RenunganWrapper from './RenunganWrapper'

type HomepageProps = {
    setting: SettingType,
    renungan: ListRenungan
}

const Homepage = ({ setting, renungan }: HomepageProps) => {
    const [scroll, setScroll] = useState(false);
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
        <>
            <header className={`header ${scroll ? "scroll-header" : ""}`} id="header">
                <nav className="nav container">
                    <img src="/images/logo.png" className="nav__logo" />
                    <div className="nav__menu" id="nav-menu">
                        {/* <ul className="nav__list">
                            <li className="nav__item">
                                <i className="ri-home-9-line nav__icon"></i>
                                <a href="#home" className="nav__link active-link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="about.html" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#discover" className="nav__link">Discover</a>
                            </li>
                            <li className="nav__item">
                                <a href="#place" className="nav__link">Places</a>
                            </li>
                        </ul> */}

                        {/* <div className="nav__dark">
                            <span className="change-theme-name">Dark mode</span>
                            <i className="ri-moon-line change-theme" id="theme-button"></i>
                        </div> */}

                        {/* <i className="ri-close-line nav__close" id="nav-close"></i> */}
                    </div>

                    {/* <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-function-line"></i>
                    </div> */}
                </nav>
            </header>
            <main className="main">
                <section className="home" id="home">
                    <img src="/images/home1.png" alt="" className="home__img" />

                    <div className="home__container container !pb-8">
                        <div className="home__data">
                            <span className="home__data-subtitle">Welcome Home</span>
                            <h1 className="home__data-title">A Place To <b className='block'>Belong, Believe, </b> and <b>Become.</b></h1>
                            <span className="home__data-verse">
                                <div className='line-height'>
                                    "Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku."
                                </div>
                                <div className='line-height'>
                                    – Mazmur 119:105
                                </div>
                            </span>
                        </div>
                        <div className="home__social">
                            <a href="https://www.facebook.com/p/GKIm-Jemaat-Amanat-Kristus-100067535020856/" target="_blank" className="home__social-link">
                                <i className="ri-facebook-box-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/gkimamanat" target="_blank" className="home__social-link">
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://www.youtube.com/@GKImAmanat" target="_blank" className="home__social-link">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>

                        <div className="home__info">
                            <div>
                                <span className="home__info-title">The best place to visit</span>
                                <a href="about.html" className="button button--flex button--link home__info-button">
                                    More <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>

                            <div className="home__info-overlay">
                                <img src="/images/home2.jpg" alt="" className="home__info-img" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="about section" id="about">
                    <div className="about__container container grid">
                        <div className="about__data">
                            <h2 className="section__title about__title">More Information About Our Church</h2>
                            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="#" className="button">Read more</a>
                        </div>

                        <div className="about__img">
                            <div className="about__img-overlay">
                                <img src="/images/about2.jpg" alt="" className="about__img-two" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="discover section" id="discover">
                    <h2 className="section__title">Discover Our Church Moments of Faith and Community </h2>

                    <div className="portfolio">
                        <main className="mainContainer">
                            <div className="button-group">
                                <button className="button active" data-filter="*">All</button>
                                <button className="button" data-filter=".design">Design</button>
                                <button className="button" data-filter=".development">Development</button>
                                <button className="button" data-filter=".logo">Logo</button>
                            </div>

                            <div className="gallery">


                                <div className="item design">
                                    <img src="/images/design1.jpg" />
                                    <div className="overlay">

                                    </div>
                                </div>

                                <div className="item design">
                                    <img src="/images/design2.jpg" />
                                    <div className="overlay">

                                    </div>
                                </div>
                                <div className="item development">
                                    <img src="/images/website1.jpg" />
                                    <div className="overlay">

                                    </div>
                                </div>

                                <div className="item development">
                                    <img src="/images/website2.jpg" />
                                    <div className="overlay">

                                    </div>
                                </div>

                                <div className="item development">
                                    <img src="/images/website3.jpg" />
                                    <div className="overlay">

                                    </div>
                                </div>

                                <div className="item logo">
                                    <img src="/images/logo1.jpg" />
                                    <div className="overlay">

                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>

                <RenunganWrapper renungan={renungan} setting={setting} />

                <section className="video section">
                    <h2 className="section__title">Live Youtube</h2>

                    <div className="video__container container">
                        <p className="video__description">Yuk, bergabung bersama kami dalam Ibadah Minggu secara live!
                            Rasakan kehadiran Tuhan di mana pun Anda berada.
                        </p>
                        <div className="video__content">
                            <iframe className='w-full h-100' src={`https://www.youtube.com/embed/${setting.watchIdLive}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>

                </section>

                {/* <section className="subscribe section">
                    <div className="subscribe__bg">
                        <div className="subscribe__container container">
                            <h2 className="section__title subscribe__title">Jangan Lupa Subscribe Youtube Kita</h2>
                            <p className="subscribe__description">Dapatkan inspirasi, firman Tuhan, dan pesan-pesan penuh kasih setiap minggunya!
                            </p>

                            <form action="" className="subscribe__form">
                                <input type="text" placeholder="Enter email" className="subscribe__input" />

                                <button className="button">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </section> */}
            </main >
            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content grid">
                        <div className="footer__data">
                            <img src="/images/logo.png" className="footer__logo" />
                            <h3 className="footer__title">GKIm Amanat Kristus</h3>
                            <div className="footer__description">
                                <div>Jl. Raya Kopo No. 246,</div>
                                <div>Bandung, Jawa Barat.</div>
                            </div>
                            <div className="footer__description">
                                <div>gkimamanatkristus@gmail.com</div>
                                <div>+62 812 2159 8380</div>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/p/GKIm-Jemaat-Amanat-Kristus-100067535020856/" target="_blank" className="footer__social">
                                    <i className="ri-facebook-box-fill"></i>
                                </a>
                                <a href="https://www.instagram.com/gkimamanat" target="_blank" className="footer__social">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                                <a href="https://www.youtube.com/@GKImAmanat" target="_blank" className="footer__social">
                                    <i className="ri-youtube-fill"></i>
                                </a>
                            </div>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">Quick Links</h3>
                            <ul>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Galery</a>
                                </li>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Event</a>
                                </li>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Offering</a>
                                </li>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Live</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">About Us</h3>
                            <ul>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Our Church</a>
                                </li>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Our Location</a>
                                </li>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="footer__data">
                            <h3 className="footer__subtitle">Our Ministry</h3>
                            <ul>
                                <li className="footer__item">
                                    <a href="" className="footer__link">Pendaftaran Jemaat</a>
                                </li>
                                <li className="footer__item">
                                    <a href="" className="footer__link">GKIm Family</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                    <div className="footer__rights">
                        <p className="footer__copy">&#169; 2025 GKIm Amanat Kristus. All Rigths Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Homepage