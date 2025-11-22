"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkTabsClient from "../../components/WorkTabsClient";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { categories, projects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";

const Work = () => {
    return (
        <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className = "min-h-screen flex items-center py-24 xl:py-0">
            <div className = "container mx-auto w-full h-full flex flex-col justify-center">
                <h2 className = "h2 mb-6 xl:mb-12 max-w-[600px] capitalize">
                    Mis últimos <span className = "text-accent">trabajos</span>
                </h2>
                <Suspense fallback = {<div>Cargando...</div>}>
                    <WorkTabsClient>
                        <Tabs className = "w-full flex flex-col gap-6 xl:gap-12">
                            <TabsList className = "flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
                                {
                                    categories.map((category) => (
                                        <TabsTrigger key = {category} value = {category} className = "capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full no-highlight cursor-pointer">
                                            {category}
                                        </TabsTrigger>
                                    ))
                                }
                            </TabsList>
                            <div className = "h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
                                {
                                    categories.map((category) => (
                                        <TabsContent key = {category} value = {category}>
                                            <Swiper modules = {[Pagination]} pagination = {{ clickable: true, dynamicBullets: true }} className = "h-max xl:h-[460px]">
                                                {
                                                    projects.filter((project) => project.category === category).map((project) => (
                                                        <SwiperSlide key = {project.id} className = "h-full">
                                                            <div className = "flex flex-col xl:flex-row gap-8">
                                                                <div className = "w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                                                    <h3 className = "h3">
                                                                        {project.title}
                                                                    </h3>
                                                                    <div className = "max-w-[300px] min-h-[130px]">
                                                                        <p className = "mb-4">
                                                                            Tecnologías usadas
                                                                        </p>
                                                                        <ul className = "flex flex-wrap gap-4">
                                                                            {
                                                                                project.tech.map((item, i) => (
                                                                                    <li key = {i} className = "flex items-center gap-4 bg-accent h-[28px] px-[14px] rounded-full">
                                                                                        {item}
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <div className = "flex flex-col sm:flex-row gap-4">
                                                                        <Link href = {project.link}>
                                                                            <button className = "btn btn-sm btn-accent flex gap-2">
                                                                                <MdArrowOutward className = "text-xl" />
                                                                                <span>Ver en vivo</span>
                                                                            </button>
                                                                        </Link>
                                                                        <Link href = {project.github}>
                                                                            <button className = "btn btn-sm btn-white flex gap-2">
                                                                                <FaGithub className = "text-xl" />
                                                                                <span>Ver en GitHub</span>
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className = "w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden group">
                                                                    <Image src = {project.image} alt = {project.alt} fill className = "object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105" />
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                        </TabsContent>
                                    ))
                                }
                            </div>
                        </Tabs>
                    </WorkTabsClient>
                </Suspense>
            </div>
        </motion.section>
    )
}

export default Work;