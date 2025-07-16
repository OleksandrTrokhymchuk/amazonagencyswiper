"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper/modules'

export default function MainSwiper() {
    return(
        <> 
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={3} 
              navigation
              pagination={{ clickable: true }} 
              scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    Slide 1
                </SwiperSlide>

                <SwiperSlide>
                    Slide 2
                </SwiperSlide>

                <SwiperSlide>
                    Slide 3
                </SwiperSlide>

                <SwiperSlide>
                    Slide 4
                </SwiperSlide>

                  <SwiperSlide>
                    Slide 5
                </SwiperSlide>
                
                <SwiperSlide>
                    Slide 6
                </SwiperSlide>
            </Swiper>
        </>
    )
}