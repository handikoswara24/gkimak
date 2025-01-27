import Homepage from '@/components/Homepage/Homepage';
import { Metadata } from 'next';
import React from 'react'
import "../css/home.css"

const TestPage = async () => {
    const fetchData = await fetch(`${process.env.BASE_URL}/api/setting`, {
        cache: 'no-cache'
    });
    const data = await fetchData.json();

    return (
        <>
            <Homepage setting={data} />
        </>

    )
}


export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Renungan Harian',
    
}

export default TestPage