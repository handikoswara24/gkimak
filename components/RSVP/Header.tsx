'use client'

import { CHURCHIMAGE, HEADERIMAGE } from '@/constants/common';
import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='relative'>
                <img src={HEADERIMAGE} className='w-full h-80 object-cover' />
                <div className='absolute w-full flex items-center justify-center space-x-10 top-0 h-80'>
                    <span className='block text-center ml-40 text-2xl mr-4 font-bold'>
                        <div className='mb-4'>
                            Berjalan Bersama Allah
                        </div>
                        <div>
                            HUT 35<sup>th</sup>
                            <br /> GKIm Amanat Kristus
                        </div>
                    </span>
                </div>
            </div>
            <div className='text-2xl text-center mt-4'>

            </div>
        </div>
    )
}

export default Header