"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ScrollArea } from "@/components/ui/scroll-area";

// ✅ Content recibe props
const Content = ({ service, workHref, containerVariants, childVariants }) => (
    <motion.div initial = "hidden" animate = "show" variants = {containerVariants} className = "flex flex-col lg:flex-row items-center lg:items-start gap-8 py-8 px-4 sm:px-0 sm:py-0 mt-10 sm:mt-0">
        <motion.div variants = {childVariants} className = "lg:w-1/2 w-full">
            <div className = {`rounded-xl overflow-hidden shadow-lg ${service.color}`}>
                {
                    service.image ? (
                        <div className = "relative w-full h-56 sm:h-72 lg:h-96">
                            <motion.div whileHover = {{ scale: 1.03 }} className = "relative w-full h-full">
                                <Image src = {service.image} alt = {`${service.title} - imagen`} fill className = "object-cover" placeholder = "blur" blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzQnIGZpbGw9JyNlMmUyZTInIC8+PC9zdmc+" />
                            </motion.div>
                        </div>
                    ) : (
                        <div className = "w-full h-56 sm:h-72 lg:h-96" />
                    )
                }
            </div>
        </motion.div>
        <motion.div variants = {childVariants} className = "lg:w-1/2 w-full">
            <h1 className = "h1 text-accent">
                {service.title}
            </h1>
            <p className = "mt-4 text-lg font-bold">
                {service.short}
            </p>
            <p className = "mt-6 max-w-prose text-white/50 leading-relaxed">
                {service.description}
            </p>
            <div className = "mt-8 flex flex-col sm:flex-row gap-4 pb-8 sm:pb-0">
                <Link href = "/contact" className = "flex items-center gap-2 btn btn-sm btn-accent">
                    <FaFileInvoiceDollar className = "text-xl" />
                    Cotizar servicio
                </Link>
                <Link href = {workHref} className = "flex items-center gap-2 btn btn-sm btn-white">
                    <HiOutlineExternalLink className = "text-xl" />
                    Ver proyectos relacionados
                </Link>
            </div>
        </motion.div>
    </motion.div>
);

export default function ServiceDetailClient({ service, workHref }) {
    const containerVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, when: "beforeChildren" } }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
    };

    return (
        <>
            {/* Móvil: con ScrollArea */}
            <div className = "block sm:hidden">
                <ScrollArea className = "h-[calc(100vh-100px)]">
                    <Content service = {service} workHref = {workHref} containerVariants = {containerVariants} childVariants = {childVariants} />
                </ScrollArea>
            </div>
            {/* Desktop: sin ScrollArea */}
            <div className = "hidden sm:block">
                <Content service = {service} workHref = {workHref} containerVariants = {containerVariants} childVariants = {childVariants} />
            </div>
        </>
    );
}