import React from 'react'

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container container-custom grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">GKIm Amanat Kristus</h3>
                        <p className="footer__description">Jalan Raya Kopo No. 246, Bandung. </p>
                        <div>
                            <a href="https://www.facebook.com/GKIm-Jemaat-Amanat-Kristus-100067535020856/" target="_blank" className="footer__social">
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
                        <h3 className="footer__subtitle">Tentang</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="/about" className="footer__link">Tentang Kami</a>
                            </li>
                            <li className="footer__item">
                                <a href="/about" className="footer__link">Visi Misi</a>
                            </li>
                            <li className="footer__item">
                                <a href="/about" className="footer__link">Hubungi Kami</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Renungan</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="/renungan" className="footer__link">Ayat Harian</a>
                            </li>
                            <li className="footer__item">
                                <a href="/renungan" className="footer__link">Renungan Terkini</a>
                            </li>
                            <li className="footer__item">
                                <a href="/renungan" className="footer__link">Refleksi Diri</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Warta</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Event</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Jadwal Pelayanan</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Kebaktian</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; {new Date().getFullYear()} GKIm-Jemaat-Amanat-Kristus. All Rigths Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer