'use client'

import React from 'react'

const Header = () => {
    const headerImage = "https://res.cloudinary.com/dsntwgt8f/image/upload/v1726929568/gkim%20ak/gmvtgxieylewtijpntxv.jpg";
    return (
        <div>
            <img src={headerImage} className='w-full h-80 object-cover' />
            <div className='text-2xl text-center mt-4'>
                WALK WITH GOD
            </div>
        </div>
    )
}

export default Header