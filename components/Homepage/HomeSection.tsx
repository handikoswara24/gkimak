import { SettingType } from '@/types/setting'
import React from 'react'

type HomeSectionProps = {
    setting: SettingType
}

const HomeSection = ({ setting }: HomeSectionProps) => {
    return (
        <section className="home" id="home">
            <img src="/images/home1.png" alt="" className="home__img" />

            <div className="home__container container">
                <div className="home__data !mt-20">
                    <span className="home__data-subtitle">{setting.welcomeText}</span>
                    <h1 className="home__data-title" dangerouslySetInnerHTML={{ __html: setting.title }}></h1>
                    <span className="home__data-verse">
                        <div className='line-height'>
                            {setting.isiAyat}
                        </div>
                        <div className='line-height'>
                            – {setting.ayat}
                        </div>
                    </span>
                </div>
                <div className="home__social !mt-5">
                    <a href="https://www.facebook.com/p/GKIm-Jemaat-Amanat-Kristus-100067535020856/" target="_blank" className="home__social-link">
                        <i className="ri-facebook-box-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/gkimamanat" target="_blank" className="home__social-link">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="https://www.youtube.com/@GKImAmanat" target="_blank" className="home__social-link">
                        <i className="ri-youtube-fill"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HomeSection