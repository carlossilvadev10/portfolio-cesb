"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <motion.div initial = "hidden" animate = "show" variants = {containerVariants} className = "flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
                <div className = "mt-8 flex flex-col sm:flex-row gap-4">
                    <Link href = "/contact" className = "btn btn-sm btn-accent">
                        Solicitar presupuesto
                    </Link>
                    <Link href = {workHref} className = "btn btn-sm btn-white">
                        Ver proyectos relacionados
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
}
