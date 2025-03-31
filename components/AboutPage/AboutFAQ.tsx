'use client'

import React, { useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal';

const FAQItems = (faq: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fade duration={1200}>
            <Slide duration={1200} direction='down'>
                <div className={`questions__item ${isOpen ? "accordion-open" : ""} transition-all dark:bg-[#162527]`} onClick={() => setIsOpen(!isOpen)}>
                    <header className="questions__header">
                        <i className="ri-add-line questions__icon"></i>
                        <h3 className="questions__item-title">
                            {faq.question}
                        </h3>
                    </header>

                    <div className={`questions__content ${isOpen ? "!h-auto" : ""} transition-all`} >
                        <p className="questions__description">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </Slide>
        </Fade>
    )
}

const AboutFAQ = () => {
    const faqs = [
        {
            question: "Apakah GKIm Amanat Kristus memiliki cabang di lokasi lain?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question: "Bagaimana suasana ibadah di GKIm Amanat Kristus?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question: "Bagaimana cara saya bergabung dengan GKIM Amanat Kristus?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question: "Apakah GKIm Amanat Kristus memiliki komunitas untuk keluarga?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question: "Bagaimana cara saya berkontribusi dalam pelayanan gereja?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question: "Apakah GKIm Amanat Kristus mengadakan kegiatan di luar ibadah Minggu?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    return (
        <section className="questions section" id="faqs">
            <h2 className="section__title-center questions__title container-custom">
                Pertanyaan yang Sering Diajukan (FAQ)
            </h2>

            <div className="questions__container container-custom grid">

                {faqs.map((faq, index) => {
                    return (
                        <FAQItems answer={faq.answer} question={faq.question} key={faq.question + index} />
                    )
                })}

            </div>
        </section>
    )
}

export default AboutFAQ