import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer