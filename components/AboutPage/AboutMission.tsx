import { AboutPageProps } from '@/types/setting'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const AboutMission = ({setting} : AboutPageProps) => {
    return (
        <section className="steps section container-custom">
            <div className="steps__bg">
                <h2 className="section__title-center steps__title">
                    {setting.aboutBannerTitle}
                </h2>

                <div className="steps__container grid">
                    <Fade duration={1200}>
                        <Slide duration={1200} direction='down'>
                            <div className="steps__card">
                                <div className="steps__card-number">01</div>
                                <h3 className="steps__card-title">{setting.aboutVisionTitle}</h3>
                                <div className="steps__card-description" dangerouslySetInnerHTML={{__html : setting.aboutVisionDesc}}>
                                    
                                </div>
                            </div>
                        </Slide>
                    </Fade>

                    <Fade duration={1200}>
                        <Slide duration={1200} direction='down'>
                            <div className="steps__card">
                                <div className="steps__card-number">02</div>
                                <h3 className="steps__card-title">{setting.aboutMissionTitle}</h3>
                                <div className="steps__card-description" dangerouslySetInnerHTML={{__html: setting.aboutMissionDesc}}>
                                </div>
                            </div>
                        </Slide>
                    </Fade>

                    <Fade duration={1200}>
                        <Slide duration={1200} direction='down'>
                            <div className="steps__card">
                                <div className="steps__card-number">03</div>
                                <h3 className="steps__card-title">{setting.aboutStatementFaith}</h3>
                                <div className="steps__card-description" dangerouslySetInnerHTML={{__html: setting.aboutStatementFaithDesc}}>
                                </div>
                            </div>
                        </Slide>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default AboutMission