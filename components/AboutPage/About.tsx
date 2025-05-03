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
import { AboutPageProps } from '@/types/setting'

const About = ({ setting }: AboutPageProps) => {
    return (
        <>
            <Header />
            <main className="main">
                <AboutHeader setting={setting}/>
                <AboutUs setting={setting} />
                <AboutMission setting={setting} />
                <AboutChurch setting={setting} />
                <AboutFAQ setting={setting} />
                <AboutAddress setting={setting} />
            </main>
            <Footer />
        </>
    )
}

export default About