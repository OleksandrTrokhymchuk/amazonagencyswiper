"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper/modules'

import SereneLivingLogoImg from "../../../../public/images/Serene_Living.svg"
import StarlightCreationsLogoImg from "../../../../public/images/Starlight_Creations.svg"
import OpulentLivingGroupLogoImg from "../../../../public/images/Opulent_Living_Group.svg"
import EthanMorganProfileImg from "../../../../public/images/Ethan_Morgan.svg"
import OliviaHayesImg from "../../../../public/images/Olivia_Hayes.svg"
import AlexandrReedProfileImg from "../../../../public/images/Alexandr_Reed.svg"
import Image from "next/image"

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
                    <Image src={SereneLivingLogoImg} alt="Serene Living Logo"/>
                    <Image src={EthanMorganProfileImg} alt="Ethan Morgan Profile Picture"/>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={StarlightCreationsLogoImg} alt="Starlight Creations Logo"/>
                    <Image src={OliviaHayesImg} alt="Olivia Hayes Profile Picture"/>

                </SwiperSlide>

                <SwiperSlide>
                    <Image src={OpulentLivingGroupLogoImg} alt="Opulent Living Group Logo"/>
                    <Image src={AlexandrReedProfileImg} alt="Alexandr Reed Profile Picture"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={SereneLivingLogoImg} alt="Serene Living Logo"/>
                    <Image src={EthanMorganProfileImg} alt="Ethan Morgan Profile Picture"/>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={StarlightCreationsLogoImg} alt="Starlight Creations Logo"/>
                    <Image src={OliviaHayesImg} alt="Olivia Hayes Profile Picture"/>

                </SwiperSlide>

                <SwiperSlide>
                    <Image src={OpulentLivingGroupLogoImg} alt="Opulent Living Group Logo"/>
                    <Image src={AlexandrReedProfileImg} alt="Alexandr Reed Profile Picture"/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}