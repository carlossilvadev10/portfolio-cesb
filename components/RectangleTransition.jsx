"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Rectangle from "./Rectangle";

const RectangleTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode = "wait">
            <div key = {pathname} className = "">
                <div className = "h-screen w-screen flex fixed top-0 left-0 right-0 pointer-events-none z-50">
                    <Rectangle />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default RectangleTransition;