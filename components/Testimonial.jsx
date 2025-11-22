"use client";

import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BiLogoLinkedin } from "react-icons/bi";
import { testimonials } from "@/lib/data";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    return (
        <Swiper modules = {[ Autoplay ]} loop = {false} autoplay = {{ delay: 4000, disableOnInteraction: false }} className = "w-full max-w-[310px] sm:max-w-[540px] bg-secondary rounded-lg">
            {
                testimonials.map((testimonial, i) => (
                    <SwiperSlide key = {i}>
                        <div className = "flex px-8 py-6 gap-8">
                            <ImQuotesLeft className = "hidden xl:flex text-8xl text-accent" />
                            <div className = "flex flex-col gap-2 text-justify">
                                <p>{testimonial.message}</p>
                                <div className = "flex items-center justify-end gap-4">
                                    <div className = "text-right">
                                        <p className = "text-accent font-semibold">{testimonial.name}</p>
                                        <p className = "text-sm text-gray-400">{testimonial.profession}</p>
                                    </div>
                                    <a href = {testimonial.linkedin} target = "_blank" rel = "noopener noreferrer">
                                        <BiLogoLinkedin className = "text-accent text-xl cursor-pointer hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Testimonial;