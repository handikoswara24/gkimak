'use client'

import React from 'react'

const Song = () => {
    const linkSong = "https://res.cloudinary.com/dsntwgt8f/video/upload/v1726493182/ie7d9ncznbq1cj7ofb3g.mp3";

    return (
        <div className='hidden'>
            <audio autoPlay loop>
                <source src={linkSong}></source>
            </audio>
        </div>
    )
}

export default Song