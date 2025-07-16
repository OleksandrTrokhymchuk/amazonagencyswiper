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
import { useRef } from "react"
import type { Swiper as SwiperRef } from 'swiper'

export default function MainSwiper() {

    const swiperRef = useRef<SwiperRef | null>(null)

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.slideNext) { 
            swiperRef.current.slideNext()
        }
    }

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.slidePrev) { 
            swiperRef.current.slidePrev()
        }
    }

    return(
        <div className="pt-12"> 
            <h1 
                className="text-4xl font-bold mb-[74px] text-center"
            >
                Voices of Success with Sales Fortuna
            </h1>
            <div className="relative flex items-center justify-center">
                <button
                    onClick={goPrev}
                    className="w-[68px] h-[68px] absolute flex items-center justify-center border border-solid border-[#D1CFCF] left-[-96px] z-10 bg-white rounded-full text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                    aria-label="Previous slide"
                >
                    <span
                        className="h-[28px] w-[20px] font-spinnaker text-[#707070] text-5xl tranform rotate-270 translate-x-[-3px] translate-y-[2px]"
                    >
                        ^
                    </span>
                </button>
                <Swiper
                    onSwiper={(swiper) => { 
                    swiperRef.current = swiper;
                }}
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={3} 
                    spaceBetween={18}
                    navigation={true}
                    pagination={{ clickable: true }} 
                    scrollbar={{ draggable: true }}
                    // className="w-full"
                >
                    <SwiperSlide >
                        <div 
                            className="max-w-[380px] max-h-[500px]
                                bg-white rounded-[12px] 
                                border border-[#B6B1B1] border-solid 
                                pb-8 px-7 pt-[170px]

                                "
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

                    <SwiperSlide>
                        <div 
                            className="max-w-[380px] max-h-[500px]
                                bg-white rounded-[12px] 
                                border border-[#B6B1B1] border-solid 
                                pb-8 px-7 pt-[170px]"
                        >
                            <blockquote>
                                <p className="relative text-[#9B9A99] leading-[1.7] text-xl mb-10 ">
                                    Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.                                
                                    <span className="font-staatliches absolute right-0 bottom-[-35px] text-8xl text-[#C6C5C6] transform rotate-180">“</span>
                                    <Image 
                                        src={StarlightCreationsLogoImg} 
                                        alt="Starlight Creations Logo"
                                        className="absolute top-[-85px]"
                                    />
                                </p>
                                <footer>
                                    <cite className="flex gap-x-4">
                                        <Image src={OliviaHayesImg} alt="Olivia Hayes Profile Picture"/>
                                        <div className="font-bold text-2xl tranform translate-y-3">
                                            Olivia Hayes <br />
                                            <span className="font-medium text-xl">Owner, Starlight <br /> Creations</span>
                                        </div>
                                    </cite>
                                </footer>
                            </blockquote>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div 
                            className="max-w-[380px] max-h-[500px]
                                bg-white rounded-[12px] 
                                border border-[#B6B1B1] border-solid 
                                pb-8 px-7 pt-[170px]"
                        >
                            <blockquote>
                                <p className="relative text-[#9B9A99] leading-[1.7] text-xl mb-10 ">
                                    Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.                                
                                    <span className="font-staatliches absolute right-0 bottom-[-35px] text-8xl text-[#C6C5C6] transform rotate-180">“</span>
                                    <Image 
                                        src={OpulentLivingGroupLogoImg} 
                                        alt="Opulent Living Group Logo"
                                        className="absolute top-[-95px]"
                                    />
                                </p>
                                <footer>
                                    <cite className="flex gap-x-4">
                                        <Image src={AlexandrReedProfileImg} alt="Alexandr Reed Profile Picture"/>
                                        <div className="font-bold text-2xl tranform translate-y-3">
                                            Olivia Hayes <br />
                                            <span className="font-medium text-xl">Co-Founder, Opulent Living Group</span>
                                        </div>
                                    </cite>
                                </footer>
                            </blockquote>
                        </div>
                    </SwiperSlide>
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

                    <SwiperSlide>
                        <div 
                            className="max-w-[380px] max-h-[500px]
                                bg-white rounded-[12px] 
                                border border-[#B6B1B1] border-solid 
                                pb-8 px-7 pt-[170px]"
                        >
                            <blockquote>
                                <p className="relative text-[#9B9A99] leading-[1.7] text-xl mb-10 ">
                                    Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.                                
                                    <span className="font-staatliches absolute right-0 bottom-[-35px] text-8xl text-[#C6C5C6] transform rotate-180">“</span>
                                    <Image 
                                        src={StarlightCreationsLogoImg} 
                                        alt="Starlight Creations Logo"
                                        className="absolute top-[-85px]"
                                    />
                                </p>
                                <footer>
                                    <cite className="flex gap-x-4">
                                        <Image src={OliviaHayesImg} alt="Olivia Hayes Profile Picture"/>
                                        <div className="font-bold text-2xl tranform translate-y-3">
                                            Olivia Hayes <br />
                                            <span className="font-medium text-xl">Owner, Starlight <br /> Creations</span>
                                        </div>
                                    </cite>
                                </footer>
                            </blockquote>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div 
                            className="max-w-[380px] max-h-[500px]
                                bg-white rounded-[12px] 
                                border border-[#B6B1B1] border-solid 
                                pb-8 px-7 pt-[170px]"
                        >
                            <blockquote>
                                <p className="relative text-[#9B9A99] leading-[1.7] text-xl mb-10 ">
                                    Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.                                
                                    <span className="font-staatliches absolute right-0 bottom-[-35px] text-8xl text-[#C6C5C6] transform rotate-180">“</span>
                                    <Image 
                                        src={OpulentLivingGroupLogoImg} 
                                        alt="Opulent Living Group Logo"
                                        className="absolute top-[-95px]"
                                    />
                                </p>
                                <footer>
                                    <cite className="flex gap-x-4">
                                        <Image src={AlexandrReedProfileImg} alt="Alexandr Reed Profile Picture"/>
                                        <div className="font-bold text-2xl tranform translate-y-3">
                                            Olivia Hayes <br />
                                            <span className="font-medium text-xl">Co-Founder, Opulent Living Group</span>
                                        </div>
                                    </cite>
                                </footer>
                            </blockquote>
                        </div>
                    </SwiperSlide>
                </Swiper>
                  <button
                        onClick={goNext}
                        className="w-[68px] h-[68px] absolute flex items-center justify-center border border-solid border-[#D1CFCF] right-[-96px] z-10 bg-white rounded-full text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                        aria-label="Previous slide"
                    >
                    <span
                        className="h-[28px] w-[20px] font-spinnaker text-[#707070] text-5xl tranform rotate-90 translate-x-[3px] translate-y-[-3px]"
                    >
                        ^
                    </span>
                </button>
            </div>
        </div>
    )
}