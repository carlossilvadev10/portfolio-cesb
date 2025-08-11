"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Inicio",
        path: "/",
    },
    {
        name: "Sobre mí",
        path: "/about",
    },
    {
        name: "Servicios",
        path: "/services",
    },
    {
        name: "Trabajo",
        path: "/work",
    },
    {
        name: "Contacto",
        path: "/contact",
    }
]

const NavLinks = ({ containerStyles }) => {
    const pathname = usePathname();

    return (
        <ul className = {containerStyles}>
            {
                links.map((link, i) => {
                    const isActive = pathname === link.path; // determine if the current link matches the active route
                    const charLength = link.name.length; // calculate the number of characters in the link name
                    const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";  // set the line with based on character length
                    return (
                        <Link key = {i} href = {link.path} className = {`relative text-lg uppercase text-white no-highlight ${isActive && `after:content-[""] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`}`}>
                            <span className = "relative z-10">
                                {link.name}
                            </span>
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default NavLinks;