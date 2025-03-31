import React from 'react'
import Header from '../Homepage/Header'
import { Slide } from 'react-awesome-reveal'
import Footer from '../Homepage/Footer'

const About = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="home" id="home">

                    <div className="home__container grid">
                        <div className="banner">
                            <div className="container-custom">
                                <h1 className="banner-title">
                                    <span>GKIm Amanat Kristus</span>
                                </h1>
                                <p className="banner-subtitle">Bertumbuh dalam iman, melayani dengan kasih, dan memberitakan Injil.</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="about section container-custom" id="about">
                    <div className="about__container grid">
                        <Slide duration={1500} direction='left' >
                            <img src="/images/about-church.png" alt="" className="about__img" />
                        </Slide>
                        <Slide duration={1500} direction='right'>
                            <div className="about__data">
                                <h2 className="section__title about__title">
                                    <div>Who we really are &</div><div>why choose us</div>
                                </h2>

                                <p className="about__description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <div className="about__details">
                                    <p className="about__details-description">
                                        <i className="ri-checkbox-fill about__details-icon"></i>
                                        We always welcome you with open hearts.
                                    </p>
                                    <p className="about__details-description">
                                        <i className="ri-checkbox-fill about__details-icon"></i>
                                        We guide you to grow in faith and walk with God.
                                    </p>
                                    <p className="about__details-description">
                                        <i className="ri-checkbox-fill about__details-icon"></i>
                                        We support you through prayer and fellowship.
                                    </p>
                                    <p className="about__details-description">
                                        <i className="ri-checkbox-fill about__details-icon"></i>
                                        100% grace and love assured.
                                    </p>
                                </div>

                                <p className="about__description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                            </div>
                        </Slide>
                    </div>
                </section>

                <section className="steps section container-custom">
                    <div className="steps__bg">
                        <h2 className="section__title-center steps__title">
                            Membimbing Perjalanan Iman dengan Benar
                        </h2>

                        <div className="steps__container grid">
                            <div className="steps__card">
                                <div className="steps__card-number">01</div>
                                <h3 className="steps__card-title">Our Vission</h3>
                                <p className="steps__card-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="steps__card">
                                <div className="steps__card-number">02</div>
                                <h3 className="steps__card-title">Our Mission</h3>
                                <p className="steps__card-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="steps__card">
                                <div className="steps__card-number">03</div>
                                <h3 className="steps__card-title">Statement of Faith</h3>
                                <p className="steps__card-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product section container-custom" id="products">
                    <h2 className="section__title-center">
                        Get to Know Our Church Leaders
                    </h2>

                    <p className="product__description">
                        Inilah para pemimpin gereja kami yang melayani dengan iman dan dedikasi untuk membimbing serta mendukung jemaat.
                        Kenali mereka dan visi pelayanannya.
                    </p>

                    <div className="product__container grid">
                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-1.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt. Tjepy</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>

                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-2.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt Hanny</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>

                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-3.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt. Indra</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>

                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-4.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt. Ie Wun</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>

                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-5.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pdt. Victor</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>

                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-6.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Ev. Nawa</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>
                    </div>
                </section>

                <section className="questions section" id="faqs">
                    <h2 className="section__title-center questions__title container-custom">
                        Pertanyaan yang Sering Diajukan (FAQ)
                    </h2>

                    <div className="questions__container container-custom grid">
                        <div className="questions__group">
                            <div className="questions__item">
                                <header className="questions__header">
                                    <i className="ri-add-line questions__icon"></i>
                                    <h3 className="questions__item-title">
                                        Apakah GKIm Amanat Kristus memiliki cabang di lokasi lain?
                                    </h3>
                                </header>

                                <div className="questions__content">
                                    <p className="questions__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <div className="questions__item">
                                <header className="questions__header">
                                    <i className="ri-add-line questions__icon"></i>
                                    <h3 className="questions__item-title">
                                        Bagaimana suasana ibadah di GKIm Amanat Kristus?
                                    </h3>
                                </header>

                                <div className="questions__content">
                                    <p className="questions__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <div className="questions__item">
                                <header className="questions__header">
                                    <i className="ri-add-line questions__icon"></i>
                                    <h3 className="questions__item-title">
                                        Bagaimana cara saya bergabung dengan GKIM Amanat Kristus?
                                    </h3>
                                </header>

                                <div className="questions__content">
                                    <p className="questions__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="questions__group">
                            <div className="questions__item">
                                <header className="questions__header">
                                    <i className="ri-add-line questions__icon"></i>
                                    <h3 className="questions__item-title">
                                        Apakah GKIm Amanat Kristus memiliki komunitas untuk keluarga?
                                    </h3>
                                </header>

                                <div className="questions__content">
                                    <p className="questions__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <div className="questions__item">
                                <header className="questions__header">
                                    <i className="ri-add-line questions__icon"></i>
                                    <h3 className="questions__item-title">
                                        Bagaimana cara saya berkontribusi dalam pelayanan gereja?
                                    </h3>
                                </header>

                                <div className="questions__content">
                                    <p className="questions__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <div className="questions__item">
                                <header className="questions__header">
                                    <i className="ri-add-line questions__icon"></i>
                                    <h3 className="questions__item-title">
                                        Apakah GKIm Amanat Kristus mengadakan kegiatan di luar ibadah Minggu?
                                    </h3>
                                </header>

                                <div className="questions__content">
                                    <p className="questions__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact section container-custom" id="contact">
                    <div className="contact__container grid">
                        <div className="contact__box">
                            <h2 className="section__title">
                                Hubungi kami dan bertumbuh dalam iman bersama
                            </h2>

                            <div className="contact__data">
                                <div className="contact__information">
                                    <h3 className="contact__subtitle">Hubungi kami untuk dukungan rohani</h3>
                                    <span className="contact__description">
                                        <i className="ri-phone-line contact__icon"></i>
                                        +6282 122 790 090
                                    </span>
                                </div>

                                <div className="contact__information">
                                    <h3 className="contact__subtitle">Kunjungi gereja kami dan beribadah bersama</h3>
                                    <span className="contact__description">
                                        <i className="ri-map-pin-line contact__icon"></i>
                                        Jalan Raya Kopo No. 246, Bandung
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="contact__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.603909771471!2d107.59170607588392!3d-6.93785136791653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e90063e67297%3A0xe8c5185bbeaf4040!2sAMANAT%20KRISTUS!5e0!3m2!1sid!2sid!4v1742465487107!5m2!1sid!2sid"
                                width="400" height="300" style={{border: "border: 1px solid #8C4F8C", borderRadius: "5%"}} loading="lazy">

                            </iframe>
                            <button className="button button--flex">
                                See The Map
                                <i className="ri-arrow-right-up-line button__icon"></i>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About