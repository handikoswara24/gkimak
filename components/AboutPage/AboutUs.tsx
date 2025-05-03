import { AboutPageProps } from '@/types/setting'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const AboutUs = ({setting} : AboutPageProps) => {
    return (
        <section className="about section container-custom" id="about">
            <div className="about__container grid">
                <Slide duration={1500} direction='left' >
                    <img src="/images/about-church.png" alt="" className="about__img" />
                </Slide>
                <Slide duration={1500} direction='right'>
                    <div className="about__data">
                        <h2 className="section__title about__title">
                            {setting.aboutTitle2}
                        </h2>

                        <div className="about__description" dangerouslySetInnerHTML={{__html : setting.aboutDesc2}}>
                            
                        </div>

                        {/* <div className="about__details">
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
                        </p> */}

                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default AboutUs