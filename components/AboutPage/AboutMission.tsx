import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const AboutMission = () => {
    return (
        <section className="steps section container-custom">
            <div className="steps__bg">
                <h2 className="section__title-center steps__title">
                    Membimbing Perjalanan Iman dengan Benar
                </h2>

                <div className="steps__container grid">
                    <Fade duration={1200}>
                        <Slide duration={1200} direction='down'>
                            <div className="steps__card">
                                <div className="steps__card-number">01</div>
                                <h3 className="steps__card-title">Our Vission</h3>
                                <p className="steps__card-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </Slide>
                    </Fade>

                    <Fade duration={1200}>
                        <Slide duration={1200} direction='down'>
                            <div className="steps__card">
                                <div className="steps__card-number">02</div>
                                <h3 className="steps__card-title">Our Mission</h3>
                                <p className="steps__card-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </Slide>
                    </Fade>

                    <Fade duration={1200}>
                        <Slide duration={1200} direction='down'>
                            <div className="steps__card">
                                <div className="steps__card-number">03</div>
                                <h3 className="steps__card-title">Statement of Faith</h3>
                                <p className="steps__card-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </Slide>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default AboutMission