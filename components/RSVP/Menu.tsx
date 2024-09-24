'use client'

import React from 'react'
import { scroller } from 'react-scroll'
import HomeIcon from '../Icons/HomeIcon'
import CalendarIcon from '../Icons/CalendarIcon'
import HeartIcon from '../Icons/HeartIcon'
import EnvelopeIcon from '../Icons/EnvelopeIcon'

const Menu = () => {
    const scrollToElement = (name: string) => {
        scroller.scrollTo(name, {
            duration: 500,
            smooth: true,
        });
    }
    return (
        <div className='w-full fixed max-w-md bottom-0 h-12 items-center z-[100] mb-2'>
            <div className='w-11/12 flex justify-around mx-auto bg-white rounded-full border border-gray-600'>
                <button className='flex flex-col justify-center items-center h-12 cursor-pointer' onClick={() => scrollToElement("home")}>
                    <div>
                        <HomeIcon className='w-5 h-5' />
                    </div>
                    <div className='text-[10px] font-montserrat'>
                        Home
                    </div>
                </button>
                <button className='flex flex-col justify-center items-center h-12 cursor-pointer' onClick={() => scrollToElement("acara")}>
                    <div>
                        <CalendarIcon className='w-5 h-5' />
                    </div>
                    <div className='text-[10px] font-montserrat'>
                        Acara
                    </div>
                </button>
                <button className='flex flex-col justify-center items-center h-12 cursor-pointer' onClick={() => scrollToElement("photo")}>
                    <div>
                        <HeartIcon className='w-5 h-5' />
                    </div>
                    <div className='text-[10px] font-montserrat'>
                        Kenangan
                    </div>
                </button>
                <button className='flex flex-col justify-center items-center h-12 cursor-pointer' onClick={() => scrollToElement("rsvp")}>
                    <div>
                        <EnvelopeIcon className='w-5 h-5' />
                    </div>
                    <div className='text-[10px] font-montserrat'>
                        RSVP
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Menu