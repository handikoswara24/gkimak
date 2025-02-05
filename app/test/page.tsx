import Homepage from '@/components/Homepage/Homepage';
import { Metadata } from 'next';
import React from 'react'
import "../css/home.css"

const TestPage = async () => {
    const fetchData = await fetch(`${process.env.BASE_URL}/api/setting`, {
        cache: 'no-cache'
    });
    const renunganFetch = await fetch(`${process.env.BASE_URL}/api/renungan?page=1&numberPerPage=3`, {
        cache: 'no-cache'
    });

    const data = await fetchData.json();

    const renunganData = await renunganFetch.json();

    return (
        <>
            <Homepage setting={data} renungan={renunganData}/>
        </>

    )
}


export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Renungan Harian',
    
}

export default TestPage