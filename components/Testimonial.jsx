"use client";

import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BiLogoLinkedin } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        message: "Trabajar con Carlos fue una experiencia muy positiva; supo captar exactamente lo que necesitaba y lo plasmó en un diseño funcional y atractivo.",
        name: "Jhon Oblitas",
        profession: "Mobile Developer",
        linkedin: "https://www.linkedin.com/in/jhon-oblitas/"
    },
    {
        message: "Carlos tiene una gran capacidad para resolver problemas y proponer soluciones creativas; su compromiso con los detalles marca la diferencia.",
        name: "Rodrigo Trejo",
        profession: "Full Stack Developer",
        linkedin: "https://www.linkedin.com/in/rodrigoatldev/"
    },
    {
        message: "Su habilidad para unir estética y funcionalidad en un proyecto es admirable; siempre entrega resultados por encima de lo esperado.",
        name: "Sergio Quiñones",
        profession: "Gestión de proyectos",
        linkedin: "https://www.linkedin.com/in/sergio-luis-qui%C3%B1ones-huapaya-a44239317/"
    },
]

const Testimonial = () => {
    return (
        <Swiper modules = {[ Autoplay ]} loop = {false} autoplay = {{ delay: 4000, disableOnInteraction: false }} className = "w-full max-w-[310px] md:max-w-[540px] bg-secondary rounded-lg">
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