import About from '@/components/AboutPage/About'
import React from 'react'
import "../css/about.css"
import { Metadata } from 'next'

const AboutPage = () => {
  return (
    <About />
  )
}

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus',
    
}

export default AboutPage