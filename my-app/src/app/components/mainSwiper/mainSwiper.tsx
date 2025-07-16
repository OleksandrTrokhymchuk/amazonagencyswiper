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
                    <blockquote>
                        <p>
                            Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.
                        </p>
                        <span>“</span>
                        <footer>
                            <cite>
                                <Image src={EthanMorganProfileImg} alt="Ethan Morgan Profile Picture"/>
                                <div>
                                    Ethan Morgan
                                    <span>Founter and CEO,<br />Serene Living Products</span>
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </SwiperSlide>
            </Swiper>
        </>
    )
}