"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Image from "next/image";
import { FaCode } from "react-icons/fa";

const About = () => {
    return (
        <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className = "h-screen flex items-center">
            <div className = "container mx-auto px-0">
                <div className = "flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
                    <div className = "hidden xl:flex flex-col items-center justify-center w-full h-full pt-14 max-w-[430px] relative">
                        <Image src = "/assets/avatar.png" alt = "avatar" width = {320} height = {496} className = "relative mb-20 z-20" />
                        <div className = "w-full h-[60px] absolute top-[480px] right-0 left-0 bg-gradient-to-t from-primary via-primary/90 z-30" />
                        <div className = "absolute top-[140px] -left-[40px] z-10">
                            <Blob containerStyles = "w-[420px] h-[420px]" />
                        </div>
                        <Socials containerStyles = "flex gap-4 w-max -mt-8 transform z-40" iconStyles = "bg-accent hover:bg-accent-hover text-white transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer" />
                    </div>
                    <ScrollArea className = "w-full h-[680px]">
                        <div className = "flex flex-col items-center xl:items-start xl:text-left">
                            <div className = "flex items-center gap-3 mb-4">
                                <div className = "w-2 h-2 bg-accent rounded-full" />
                                <p>Sobre mí</p>
                            </div>
                            <div className = "flex flex-col md:flex-row items-center gap-3 text-center mb-6 max-w-[310px] md:max-w-[540px]">
                                <h2 className = "h2">
                                    <span className = "text-accent">Carlos Eduardo</span> Silva Bustamante
                                </h2>
                                <FaCode className = "text-accent text-5xl md:text-6xl shrink-0" />
                            </div>
                            <p className = "max-w-[310px] md:max-w-[540px] mb-12 text-justify">
                                Me apasiona diseñar y desarrollar experiencias web que combinen estética y funcionalidad, ya que cada proyecto es una oportunidad para
                                transformar ideas en interfaces fluidas, atractivas y pensadas al detalle, logrando que cada interacción sea tan agradable como intuitiva.
                            </p>
                            <div className = "flex flex-col items-center xl:items-start gap-16">
                                <Stats />
                                <Testimonial />
                                <Info />
                                <Journey />
                                <Skills />
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </motion.section>
    )
}

export default About;