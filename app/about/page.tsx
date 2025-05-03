import About from '@/components/AboutPage/About'
import React from 'react'
import "../css/about.css"
import { Metadata } from 'next'


const AboutPage = async () => {
  const fetchData = await fetch(`${process.env.BASE_URL}/api/setting`, {
    cache: 'no-cache'
  });

  const data = await fetchData.json();
  return (
    <About setting={data} />
  )
}

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus',

}

export default AboutPage