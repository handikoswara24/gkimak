'use client'

import { ListRenungan } from '@/types/renunganharian'
import { SettingType } from '@/types/setting'
import React from 'react'
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
                    <div className="about__container container-custom grid">
                        <div className="about__data">
                            <h2 className="section__title about__title">{setting.tentangGereja}</h2>
                            <div className="about__description" dangerouslySetInnerHTML={{__html: setting.tentangGerejaDesc}}></div>
                            <a href="about.html" className="button">{setting.tentangGerejaButton}</a>
                        </div>

                        <div className="about__img">
                            <div className="about__img-overlay">
                                <img src="/images/about1.jpg" alt="" className="about__img-one" />
                            </div>

                            <div className="about__img-overlay">
                                <img src="/images/about2.jpg" alt="" className="about__img-two" />
                            </div>
                        </div>
                    </div>
                </section>

                <RenunganWrapper renungan={renungan} setting={setting} />

                <section className="video section">
                    <h2 className="section__title">{setting.live}</h2>

                    <div className="video__container container-custom">
                        <div className="video__description" dangerouslySetInnerHTML={{__html: setting.liveDesc}}>
                        </div>
                        <div className="video__content">
                            <iframe className='w-full h-100' src={`https://www.youtube.com/embed/${setting.watchIdLive}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>

                </section>

                <section className="gallery section" id="gallery">
                    <h2 className="section__title">{setting.kenangan}</h2>

                    <div className="gallery__container">
                        <div className="button-group">
                            <button className="button active" data-filter="*">Semua</button>
                            <button className="button" data-filter=".bajem">Bajem</button>
                            <button className="button" data-filter=".natal">Natal</button>
                            <button className="button" data-filter=".other">Other</button>
                        </div>

                        <div className="gallery__content">
                            <div className="item bajem">
                                <img src="/images/blog-p-1.jpg" />
                            </div>

                            <div className="item bajem">
                                <img src="/images/blog-p-2.jpg" />
                            </div>

                            <div className="item bajem">
                                <img src="/images/blog-p-3.jpg" />
                            </div>

                            <div className="item natal">
                                <img src="/images/blog-p-4.jpg" />
                            </div>

                            <div className="item natal">
                                <img src="/images/blog-p-5.jpg" />
                            </div>

                            <div className="item other">
                                <img src="/images/blog-p-6.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default Homepage