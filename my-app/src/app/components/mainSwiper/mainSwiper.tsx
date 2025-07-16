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
            <h1>Voices of Success with Sales Fortuna</h1>
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
                                    <span>Founter and CEO, Serene Living Products</span>
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={StarlightCreationsLogoImg} alt="Starlight Creations Logo"/>
                    <blockquote>
                        <p>
                            Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.
                        </p>
                        <span>“</span>
                        <footer>
                            <cite>
                                <Image src={OliviaHayesImg} alt="Olivia Hayes Profile Picture"/>
                                <div>
                                    Olivia Hayes
                                    <span>Owner, Starlight Creations</span>
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={OpulentLivingGroupLogoImg} alt="Opulent Living Group Logo"/>
                    <blockquote>
                        <p>
                            Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.
                        </p>
                        <span>“</span>
                        <footer>
                            <cite>
                                <Image src={AlexandrReedProfileImg} alt="Alexandr Reed Profile Picture"/>
                                <div>
                                    Alexandr Reed
                                    <span>Co-Founder, Opulent Living Group</span>
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </SwiperSlide>

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
                                    <span>Founter and CEO, Serene Living Products</span>
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={StarlightCreationsLogoImg} alt="Starlight Creations Logo"/>
                    <blockquote>
                        <p>
                            Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.
                        </p>
                        <span>“</span>
                        <footer>
                            <cite>
                                <Image src={OliviaHayesImg} alt="Olivia Hayes Profile Picture"/>
                                <div>
                                    Olivia Hayes
                                    <span>Owner, Starlight Creations</span>
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={OpulentLivingGroupLogoImg} alt="Opulent Living Group Logo"/>
                    <blockquote>
                        <p>
                            Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.
                        </p>
                        <span>“</span>
                        <footer>
                            <cite>
                                <Image src={AlexandrReedProfileImg} alt="Alexandr Reed Profile Picture"/>
                                <div>
                                    Alexandr Reed
                                    <span>Co-Founder, Opulent Living Group</span>
                                </div>
                            </cite>
                        </footer>
                    </blockquote>
                </SwiperSlide>
            </Swiper>
        </>
    )
}