'use client'

import { ListRenungan } from '@/types/renunganharian'
import { SettingType } from '@/types/setting'
import React  from 'react'
import RenunganWrapper from './RenunganWrapper'
import Header from './Header'
import HomeSection from './HomeSection'
import Footer from './Footer'

type HomepageProps = {
    setting: SettingType,
    renungan: ListRenungan
}

const Homepage = ({ setting, renungan }: HomepageProps) => {
    return (
        <>
            <Header />
            <main className="main">
                <HomeSection setting={setting} />

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
            <Footer />
        </>
    )
}

export default Homepage