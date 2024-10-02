'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { PHOTO1, PHOTO10, PHOTO11, PHOTO12, PHOTO13, PHOTO14, PHOTO15, PHOTO16, PHOTO17, PHOTO18, PHOTO19, PHOTO2, PHOTO20, PHOTO21, PHOTO22, PHOTO3, 
    PHOTO4, PHOTO5, PHOTO6, PHOTO7, PHOTO8, PHOTO9 } from '@/constants/common';

const Photos = () => {
    const photos = [PHOTO1, PHOTO2, PHOTO3, PHOTO4, PHOTO5, PHOTO6,
         PHOTO7, PHOTO8, PHOTO9, PHOTO10, PHOTO11, PHOTO12, PHOTO13, PHOTO14, 
         PHOTO15, PHOTO16, PHOTO17, PHOTO18, PHOTO19, PHOTO20, PHOTO21, PHOTO22]
    return (
        <div className='mt-10'>
            <Swiper
                spaceBetween={60}
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={"auto"}
                modules={[Pagination, Autoplay]}
                className="photoswiper w-full h-full"
                autoplay={{
                    delay: 300000000,
                    disableOnInteraction: true,
                }}
                wrapperClass='pb-10'
            >
                {photos.map((p, key) => (
                    <SwiperSlide className='!w-8/12 flex justify-center items-center' key={"photo" + key}>
                        {({ isActive }) => (
                            <img src={p} className={`w-full h-48 ${isActive ? "" : "relative top-4"}`} style={{ objectPosition: key == 6 ? "0 15px" : "0" }} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Photos