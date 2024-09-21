import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const PhotoComponent = () => {
    return (
        <div>
            <div>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 300000000,
                        disableOnInteraction: true,
                    }}
                    wrapperClass='pb-10'
                >
                    <SwiperSlide>
                        <img src="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default PhotoComponent