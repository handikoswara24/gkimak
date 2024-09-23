'use client'

import { CHURCHIMAGE, HEADERIMAGE } from '@/constants/common';
import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='relative'>
                <img src={HEADERIMAGE} className='w-full h-80 object-cover blur-sm' />
                <div className='absolute w-full flex items-center justify-center space-x-10 top-0 h-80'>
                    <img src={CHURCHIMAGE} className='h-60' />
                    <span className='block text-center'>
                        HUT Ke 35 
                        <br /> GKIm Amanat Kristus
                    </span>
                </div>
            </div>
            <div className='text-2xl text-center mt-4'>

            </div>
        </div>
    )
}

export default Header