import React from 'react'
import Header from '../Homepage/Header'
import { Slide } from 'react-awesome-reveal'
import Footer from '../Homepage/Footer'
import AboutHeader from './AboutHeader'
import AboutUs from './AboutUs'
import AboutMission from './AboutMission'
import AboutChurch from './AboutChurch'
import AboutFAQ from './AboutFAQ'
import AboutAddress from './AboutAddress'

const About = () => {
    return (
        <>
            <Header />
            <main className="main">
                <AboutHeader />
                <AboutUs />
                <AboutMission />
                <AboutChurch />
                <AboutFAQ />
                <AboutAddress />
            </main>
            <Footer />
        </>
    )
}

export default About