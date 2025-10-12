"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkTabsClient from "../../components/WorkTabsClient";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";

const projects = [
    {
        id: 1,
        category: "frontend",
        title: "EShop CESB - Tienda Online Moderna",
        description: "Landing page atractiva y funcional, diseñada con React y Tailwind CSS, enfocada en presentar una tienda online de dispositivos tecnológicos con productos seleccionados para brindar calidad, estilo y rendimiento.",
        image: "/assets/work/thumb1.png",
        alt: "project-1",
        link: "https://eshop-cesb.netlify.app/",
        github: "https://github.com/carlossilvadev10/eshop-cesb",
        tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        id: 2,
        category: "frontend",
        title: "Event Horizont - Centro de Eventos",
        description: "Landing page dinámica y responsiva creada con React, Tailwind CSS y Next.js, destinada a conectar usuarios con eventos y experiencias culturales, ofreciendo navegación fluida y optimización SEO.",
        image: "/assets/work/thumb2.png",
        alt: "project-2",
        link: "https://event-horizont.netlify.app/",
        github: "https://github.com/carlossilvadev10/event-horizont",
        tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"]
    },
    {
        id: 3,
        category: "frontend",
        title: "Tripi Travel – Portal de Viajes",
        description: "Landing page moderna y adaptativa desarrollada con React, Tailwind CSS y Next.js, que facilita a los usuarios la búsqueda y reserva de alojamientos, priorizando una experiencia de usuario rápida y cómoda.",
        image: "/assets/work/thumb3.png",
        alt: "project-3",
        link: "https://tripi-travel-web.netlify.app/",
        github: "https://github.com/carlossilvadev10/tripi-travel",
        tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
        id: 4,
        category: "frontend",
        title: "Shop Cart - Tienda Comercial",
        description: "Landing page sencilla y funcional desarrollada con React y Bootstrap, enfocada en ofrecer una experiencia clara y atractiva para la compra de productos deportivos y artículos para el hogar.",
        image: "/assets/work/thumb4.png",
        alt: "project-4",
        link: "https://github.com/carlossilvadev10/shop-cart",
        github: "https://github.com/carlossilvadev10/shop-cart",
        tech: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Sass"]
    },
    {
        id: 5,
        category: "frontend",
        title: "Nike Store - Tienda Online Deportiva",
        description: "Landing page moderna e intuitiva desarrollada con React y Tailwind CSS. Presenta una tienda online inspirada en Nike, enfocada en resaltar productos deportivos con diseño responsivo, alto rendimiento y una experiencia de usuario optimizada.",
        image: "/assets/work/thumb5.png",
        alt: "project-5",
        link: "https://nike-store-sport.vercel.app/",
        github: "https://github.com/carlossilvadev10/nike-store",
        tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        id: 6,
        category: "frontend",
        title: "Fit Physique - Plataforma Fitness Motivacional",
        description: "Landing page moderna y motivadora desarrollada con React, Tailwind CSS y Next.js, que presenta rutinas, productos y contenido fitness para inspirar a los usuarios a alcanzar su mejor versión.",
        image: "/assets/work/thumb6.png",
        alt: "project-6",
        link: "https://fit-physique-phi.vercel.app/",
        github: "https://github.com/carlossilvadev10/fit-physique",
        tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
        id: 7,
        category: "full stack",
        title: "Mesa de Partes – Sistema Administrativo",
        description: "Aplicación web full stack desarrollada en PHP para gestionar trámites y documentación institucional.",
        image: "/assets/work/thumb7.png",
        alt: "project-7",
        link: "#",
        github: "https://github.com/carlossilvadev10/SistemaMesadePartesUNJFSC",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL" ]
    },
];

const categories = ["frontend", "backend", "full stack", "ux/ui"];

const Work = () => {
    return (
        <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className = "min-h-screen flex items-center py-24 xl:py-0">
            <div className = "container mx-auto w-full h-full flex flex-col justify-center">
                <h2 className = "h2 mb-6 xl:mb-12 max-w-[600px] capitalize">
                    Mis últimos <span className = "text-accent">trabajos</span>
                </h2>
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
            </div>
        </motion.section>
    )
}

export default Work;