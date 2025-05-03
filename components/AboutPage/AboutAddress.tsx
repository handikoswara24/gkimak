import { AboutPageProps } from '@/types/setting'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const AboutAddress = ({setting} : AboutPageProps) => {
    return (
        <section className="contact section container-custom" id="contact">

            <div className="contact__container grid">
                <Fade duration={1200}>
                    <Slide duration={1400} direction='left'>
                        <div className="contact__box">
                            <h2 className="section__title">
                                {setting.hubTitle}
                            </h2>

                            <div className="contact__data">
                                <div className="contact__information">
                                    <h3 className="contact__subtitle">{setting.waTitle}</h3>
                                    <span className="contact__description">
                                        <i className="ri-phone-line contact__icon"></i>
                                        {setting.waNumber}
                                    </span>
                                </div>

                                <div className="contact__information">
                                    <h3 className="contact__subtitle">{setting.addressTitle}</h3>
                                    <span className="contact__description">
                                        <i className="ri-map-pin-line contact__icon"></i>
                                        {setting.address}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Fade>
                <Fade duration={1200}>
                    <Slide duration={1400} direction='right'>=
                        <div className="contact__map flex flex-col items-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.603909771471!2d107.59170607588392!3d-6.93785136791653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e90063e67297%3A0xe8c5185bbeaf4040!2sAMANAT%20KRISTUS!5e0!3m2!1sid!2sid!4v1742465487107!5m2!1sid!2sid"
                                width="400" height="300" style={{ border: "1px solid #8C4F8C", borderRadius: "5%", maxWidth: "95%" }} loading="lazy">

                            </iframe>
                            <button className="button button--flex">
                                {setting.mapsButtonLabel}
                                <i className="ri-arrow-right-up-line button__icon"></i>
                            </button>
                        </div>
                    </Slide>
                </Fade>
            </div>
        </section>
    )
}

export default AboutAddress