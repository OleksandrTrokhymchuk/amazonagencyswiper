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
        <div className="px-24 pt-12"> 
            <h1 
                className="text-4xl font-bold mb-[74px] text-center"
            >
                Voices of Success with Sales Fortuna
            </h1>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={3} 
              spaceBetween={18}
              navigation
              pagination={{ clickable: true }} 
              scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div 
                        className="max-w-[380px] max-h-[500px]
                            bg-white rounded-[12px] 
                            border border-[#B6B1B1] border-solid 
                            pb-8 px-7 pt-[170px]"
                    >
                        
                        <blockquote>
                            <p className="relative text-[#9B9A99] leading-[1.7] text-xl mb-10 ">
                                Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.
                                <span className="font-staatliches absolute right-0 bottom-[-35px] text-8xl text-[#C6C5C6] transform rotate-180">“</span>
                                <Image 
                                    src={SereneLivingLogoImg} 
                                    alt="Serene Living Logo"
                                    className="absolute top-[-115px]"
                                />
                            </p>
                            <footer>
                                <cite className="flex gap-x-4">
                                    <Image src={EthanMorganProfileImg} alt="Ethan Morgan Profile Picture"/>
                                    <div className="font-bold text-2xl tranform translate-y-3">
                                        Ethan Morgan <br />
                                        <span className="font-medium text-xl">Founter and CEO, <br /> Serene Living Products</span>
                                    </div>
                                </cite>
                            </footer>
                        </blockquote>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}