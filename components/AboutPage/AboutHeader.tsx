import { AboutPageProps } from '@/types/setting'
import React from 'react'

const AboutHeader = ({setting} : AboutPageProps) => {
    return (
        <section className="home" id="home">
            <div className="home__container grid">
                <div className="banner">
                    <div className="container-custom">
                        <h1 className="banner-title">
                            <span>{setting.aboutTitle}</span>
                        </h1>
                        <div className="banner-subtitle" dangerouslySetInnerHTML={{__html : setting.aboutDesc}}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHeader