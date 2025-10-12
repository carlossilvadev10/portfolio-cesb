"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi"
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Image from "next/image";

const services = [
    {
        icon: "/assets/services/frontend.svg",
        alt: "frontend-icon",
        value: "frontend",
        label: "Desarrollo frontend",
    },
    {
        icon: "/assets/services/backend.svg",
        alt: "backend-icon",
        value: "backend",
        label: "Desarrollo backend",
    },
    {
        icon: "/assets/services/fullstack.png",
        alt: "fullstack-icon",
        value: "fullstack",
        label: "Desarrollo full stack",
    },
    {
        icon: "/assets/services/design.svg",
        alt: "design-icon",
        value: "design",
        label: "Diseño UX/UI",
    },
    {
        icon: "/assets/services/seo.svg",
        alt: "seo-icon",
        value: "seo",
        label: "Optimización SEO",
    },
    {
        icon: "/assets/services/video.svg",
        alt: "video-icon",
        value: "video",
        label: "Producción de videos",
    }
]

const Contact = () => {
    return (
        <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className = "h-screen flex items-center py-24 xl:py-0">
            <div className = "container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
                <div className = "w-full">
                    <div className = "flex flex-col xl:flex-row gap-8">
                        <div className = "flex-1 xl:w-[600px] flex flex-col gap-8">
                            <div className = "">
                                <h2 className = "h2 mb-6 capitalize">
                                    Ponte en <span className = "text-accent">contacto</span>
                                </h2>
                                <p className = "max-w-[488px] text-justify">
                                    Si buscas impulsar tu proyecto con un desarrollo web sólido y un diseño UX/UI atractivo, me encantaría ayudarte, ya que cuento con experiencia en frontend, backend, full-stack, SEO y producción de contenido,
                                    y disfruto creando soluciones prácticas y escalables. Cuéntame en tu mensaje el servicio que necesitas, el alcance y el plazo estimado y trabajaré en una propuesta pensada para que logremos tus objetivos juntos.
                                </p>
                            </div>
                            <div className = "flex flex-col gap-8">
                                <div className = "flex items-center gap-4 text-lg">
                                    <span className = "text-accent">
                                        <HiOutlinePhone className = "text-2xl"/>
                                    </span>
                                    <span>+51 924 141 969</span>
                                </div>
                                <div className = "flex items-center gap-4 text-lg">
                                    <span className = "text-accent">
                                        <HiOutlineMail className = "text-2xl"/>
                                    </span>
                                    <span>carlos.esilva1007@gmail.com</span>
                                </div>
                                <div className = "flex items-center gap-4 text-lg">
                                    <span className = "text-accent">
                                        <HiOutlineMapPin className = "text-2xl"/>
                                    </span>
                                    <span>Lima, Perú</span>
                                </div>
                            </div>
                        </div>
                        <div className = "flex-1">
                            <form action = "" className = "flex flex-col gap-6 items-start">
                                <div className = "w-full flex flex-col xl:flex-row gap-6">
                                    <div className = "w-full">
                                        <Label htmlFor = "name">
                                            Nombres <span className = "text-accent">*</span>
                                        </Label>
                                        <Input type = "text" name = "name" id = "name" placeholder = "Nombres" required />
                                    </div>
                                    <div className = "w-full">
                                        <Label htmlFor = "lastName">
                                            Apellidos <span className = "text-accent">*</span>
                                        </Label>
                                        <Input type = "text" name = "lastName" id = "lastName" placeholder = "Apellidos" required />
                                    </div>
                                </div>
                                <div className = "w-full flex flex-col xl:flex-row gap-6">
                                    <div className = "w-full">
                                        <Label htmlFor = "email">
                                            Correo electrónico <span className = "text-accent">*</span>
                                        </Label>
                                        <Input type = "email" name = "email" id = "email" placeholder = "tucorreo@gmail.com" required />
                                    </div>
                                    <div className = "w-full">
                                        <Label htmlFor = "phone">
                                            Celular <span className = "text-accent">*</span>
                                        </Label>
                                        <Input type = "tel" name = "phone" id = "phone" placeholder = "+51 987 654 321" pattern = "^\+?[0-9\s]{7,15}$" title = "Incluye el código de país, por ejemplo: +51 987 654 321" required />
                                    </div>
                                </div>
                                <div className = "w-full">
                                    <Label htmlFor = "service">
                                        Estoy interesado en <span className = "text-accent">*</span>
                                    </Label>
                                    <Select name = "service" id = "service" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder = "Selecciona un servicio" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                services.map((service, i) => (
                                                    <SelectItem key = {i} value = {service.value}>
                                                        <Image src = {service.icon} alt = {service.alt} width = {20} height = {20} className = "inline-block mr-2" />
                                                        {service.label}
                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className = "w-full">
                                    <Label htmlFor = "message">
                                        Mensaje <span className = "text-accent">*</span>
                                    </Label>
                                    <Textarea name = "message" id = "message" placeholder = "Escribe tu mensaje aquí..." />
                                </div>
                                <div className = "flex justify-center w-full">
                                    <button className = "btn btn-lg btn-accent">
                                        <div className = "flex items-center gap-3">
                                            <span className = "font-medium">Enviar mensaje</span>
                                            <HiOutlineArrowLongRight className = "text-xl" />
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;