import { AboutPageProps } from '@/types/setting'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const AboutChurch = ({setting}: AboutPageProps) => {
    return (
        <section className="product section container-custom" id="products">
            <h2 className="section__title-center">
                {setting.leaderTitle}
            </h2>

            <div className="product__description" dangerouslySetInnerHTML={{__html: setting.leaderDesc}}>
            </div>

            <div className="product__container grid">
                <Fade duration={1200}>
                    <Slide duration={1200} direction='down'>
                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-1.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt. Tjepy</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>
                    </Slide>
                </Fade>

                <Fade duration={1200}>
                    <Slide duration={1300} direction='down'>
                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-2.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt Hanny</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>
                    </Slide>
                </Fade>

                <Fade duration={1200}>
                    <Slide duration={1400} direction='down'>
                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-3.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt. Indra</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>
                    </Slide>
                </Fade>

                <Fade duration={1200}>
                    <Slide duration={1200} direction='down'>
                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-4.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pnt. Ie Wun</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>
                    </Slide>
                </Fade>

                <Fade duration={1200}>
                    <Slide duration={1300} direction='down'>=
                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-5.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Pdt. Victor</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>
                    </Slide>
                </Fade>

                <Fade duration={1200}>
                    <Slide duration={1400} direction='down'>
                        <article className="product__card">
                            <div className="product__circle"></div>

                            <img src="/images/blog-p-6.jpg" alt="" className="product__img" />

                            <h3 className="product__title">Ev. Nawa</h3>
                            <span className="product__price">Lorem Ipsun</span>

                        </article>
                    </Slide>
                </Fade>
            </div>
        </section>
    )
}

export default AboutChurch