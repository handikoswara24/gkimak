'use client'

import coverAtom from '@/store/coverAtom'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import React, { useRef } from 'react'

type CoverProps = {
    onPlay : () => void
}

const Cover = ({onPlay} : CoverProps) => {
    const [, setCover] = useAtom(coverAtom);

    const onOpen = () => {
        onPlay();
        setCover(1)
    }
    return (
        <div className='w-full h-screen flex justify-center items-center relative bg-white max-h-screen overflow-hidden'>
            <motion.div className='absolute top-0 left-0 right-0 bottom-0 bg-cover' animate={{ y: "75%", transitionDuration: "1s" }}>

            </motion.div>
            <div className='w-96 z-20 relative min-h-48'>
                <motion.div className='flex justify-center items-center absolute top-0' animate={{ opacity: 0, transitionDuration: "1s" }} >
                    <img src="https://res.cloudinary.com/dsntwgt8f/image/upload/v1726918528/gkim%20ak/hiu3ivedh9qpxugme0km.png" className='w-2/5' />
                    <div className='text-black text-center text-xl'>
                        <div>
                            GKIm Amanat Kristus
                        </div>
                        <div className=''>
                            Bandung
                        </div>
                    </div>
                </motion.div>
                <motion.div className='flex justify-center items-center absolute top-0 text-black w-full' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1 }}>
                    <div className='flex flex-col justify-center items-center border border-orange p-4 rounded-xl'>
                        <img src="https://res.cloudinary.com/dsntwgt8f/image/upload/v1726918528/gkim%20ak/hiu3ivedh9qpxugme0km.png" className='w-20' />
                        <div className='mt-3 border border-orange rounded-xl py-2 px-4 cursor-pointer hover:text-white hover:bg-orange' onClick={() => onOpen()}>
                            Buka Undangan
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Cover