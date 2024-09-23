'use client'

import React from 'react'
import TimerHooks from './TimerHooks'

const Timer = () => {
    const { days, hours, minutes, seconds } = TimerHooks(new Date(2024, 9, 17, 17))
    return (
        <div className='bg-cover p-4 mt-8'>
            <div className='text-white text-xs text-center mb-4'>
                Hitung Mundur Menuju HUT ke 35 GKIm Amanat Kristus
            </div>
            <div className='flex justify-center gap-x-4 font-montserrat'>
                <div className='text-center text-orange bg-white rounded-xl px-4 py-2 min-w-16'>
                    <div className='text-xl mb-1'>
                        {days > 9 ? days : "0" + days}
                    </div>
                    <div className='text-[10px] relative -top-1' style={{ fontWeight: 300 }}>
                        Hari
                    </div>
                </div>
                <div  className='text-center text-orange bg-white rounded-xl px-4 py-2 min-w-16'> 
                    <div className='text-xl mb-1'>
                        {hours > 9 ? hours : "0" + hours}
                    </div>
                    <div className='text-[8px] relative -top-1' style={{ fontWeight: 300 }}>
                        Jam
                    </div>
                </div>
                <div className='text-center text-orange bg-white rounded-xl px-4 py-2 min-w-16'>
                    <div className='text-xl mb-1'>
                        {minutes > 9 ? minutes : "0" + minutes}
                    </div>
                    <div className='text-[8px] relative -top-1' style={{ fontWeight: 300 }}>
                        Menit
                    </div>
                </div>
                <div className='text-center text-orange bg-white rounded-xl px-4 py-2 min-w-16'>
                    <div className='text-xl mb-1'>
                        {seconds > 9 ? seconds : "0" + seconds}
                    </div>
                    <div className='text-[8px] relative -top-1' style={{ fontWeight: 300 }}>
                        Detik
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer