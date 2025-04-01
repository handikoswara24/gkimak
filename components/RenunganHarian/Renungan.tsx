import React from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'

const Renungan = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="home" id="home">

                    <div className="home__container grid">
                        <div className="banner">
                            <div className="container-custom">
                                <h1 className="banner-title">
                                    <span>Firman.</span> Kehidupan. Kebenaran.
                                </h1>
                                <p className="banner-subtitle">Semua tentang Iman, Doa, dan Kedekatan dengan Tuhan</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="design" id="design">
                    <div className="container-custom">
                        <div className="title">
                            <h2>Renungan Terkini</h2>
                            <p>Artikel Terkini Tentang Inspirasi Iman Terkini</p>
                        </div>

                        <div className="design-content">
                            <div className="design-item">
                                <div className="design-img">
                                    <img src="/images/art-design-1.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i> 22</span>
                                    <span>GKIm Amanat Kristus</span>
                                </div>

                                <div className="design-title">
                                    <a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                                </div>

                            </div>

                            <div className="design-item">
                                <div className="design-img">
                                    <img src="/images/art-design-2.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i> 22</span>
                                    <span>GKIm Amanat Kristus</span>
                                </div>

                                <div className="design-title">
                                    <a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                                </div>

                            </div>

                            <div className="design-item">
                                <div className="design-img">
                                    <img src="/images/art-design-3.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i> 22</span>
                                    <span>GKIm Amanat Kristus</span>
                                </div>

                                <div className="design-title">
                                    <a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog" id="blog">
                    <div className="container-custom">
                        <div className="title">
                            <h2>Renungan Terbaru</h2>
                            <p>Artikel Terbaru tentang Kedekatan dengan Tuhan</p>
                        </div>

                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-1.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-2.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-3.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-4.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-5.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-6.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Renungan