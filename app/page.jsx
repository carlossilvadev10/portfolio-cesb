"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Image from "next/image";
import AvatarImg from "@/public/assets/avatar.png";

const page = () => {
  return (
    <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className = "h-screen flex items-center">
      <Pattern />
      <div className = "flex flex-col xl:flex-row items-center justify-between w-full">
        <div className = "w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-justify">
          <h1 className = "h1 flex-1 mb-[20px]">
            Hola! Soy Carlos, <br />
            <div className = "mt-2">
              <TypeAnimation sequence = {["Desarrollador web", 2000, "Diseñador web", 2000]} speed = {40} repeat = {Infinity} cursor = {false} wrapper = "span" className = "text-accent" />
            </div>
          </h1>
          <p className = "xl:max-w-[500px] mb-[44px]">
            Diseño y desarrollo sitios web y aplicaciones atractivas, intuitivas y funcionales, transformando tus ideas en experiencias digitales fluidas y cautivadoras.
          </p>
          <button className = "btn btn-lg btn-accent mb-[44px]">
            <div className = "flex items-center gap-2">
              <span>Hablemos</span>
              <MdArrowOutward className = "text-xl" />
            </div>
          </button>
          <div className = "flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-[44px] xl:mb-0">
            <div className = "flex items-center gap-4 text-lg w-[200px]">
              <span className = "text-accent">
                <HiOutlinePhone className = "text-xl" />
              </span>
              <span>+51 924 141 969</span>
            </div>
            <div className = "flex items-center gap-4 text-lg">
              <span className = "text-accent">
                <HiOutlineMail className = "text-xl" />
              </span>
              <span>carlos.esilva1007@gmail.com</span>
            </div>
          </div>
          <Socials containerStyles = "flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2" iconStyles = "bg-accent hover:bg-accent-hover text-white transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer" />
        </div>
        <div className = "hidden xl:block flex-1 relative z-20">
          <Blob containerStyles = "w-[560px] h-[560px]" />
          <Image src = {AvatarImg} alt = "avatar-img" width = {440} height = {600} quality = {100} className = "absolute -top-16 left-[120px]" />
          <div className = "w-[468px] h-[104px] absolute right-0 bottom-8 left-24 bg-gradient-to-t from-primary via-primary/90 to-primary/40" />
        </div>
      </div>
    </motion.section>
  )
}

export default page;