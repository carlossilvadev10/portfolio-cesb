"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md"
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    icon: "/assets/services/frontend.svg",
    alt: "frontend-icon",
    href: "",
    title: "Desarrollo frontend",
  },
  {
    icon: "/assets/services/backend.svg",
    alt: "backend-icon",
    href: "",
    title: "Desarrollo backend",
  },
  {
    icon: "/assets/services/fullstack.png",
    alt: "fullstack-icon",
    href: "",
    title: "Desarrollo full stack",
  },
  {
    icon: "/assets/services/design.svg",
    alt: "design-icon",
    href: "",
    title: "Diseño UX/UI",
  },
  {
    icon: "/assets/services/seo.svg",
    alt: "seo-icon",
    href: "",
    title: "Optimización SEO",
  },
  {
    icon: "/assets/services/video.svg",
    alt: "video-icon",
    href: "",
    title: "Producción de videos",
  }
]

const Services = () => {
  return (
    <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className = "h-screen flex items-center">
      <div className = "container mx-auto w-full flex flex-col gap-16">
        <div className = "flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <h2 className = "h2 max-w-[480px] text-left xl:mb-0 capitalize">
            Soluciones <span className = "text-accent">web personalizadas</span> para impulsar tu negocio
          </h2>
          <button className = "btn btn-lg btn-accent">
            <div className = "flex items-center gap-2">
              Ver todos los servicios <MdArrowRightAlt className = "text-2xl" />
            </div>
          </button>
        </div>
        <Swiper spaceBetween = {30} slidesPerView = {1} breakpoints = {{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} modules = {[Pagination]} pagination = {{ clickable: true, dynamicBullets: true }} className = "h-[320px]">
          {
            services.map((service, i) => (
              <SwiperSlide key = {i}>
                <div className = "bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                  <div className = "flex items-center justify-between mb-12">
                    <Image src = {service.icon} alt = {service.alt} width = {40} height = {40} className = "no-highlight" />
                    <div className = "w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all">
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <h5 className = "text-[22px] font-medium max-w-[240px]">
                    {service.title}
                  </h5>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </motion.section>
  )
}

export default Services;