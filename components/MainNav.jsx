import React from "react";
import { MdFileDownloadDone } from "react-icons/md";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const MainNav = () => {
    return (
        <nav className = "w-full pt-16">
            <div className = "flex flex-col h-full items-center justify-between">
                <Logo />
                <NavLinks containerStyles = "flex flex-col gap-6" />
                <button className = "btn btn-lg btn-tertiary mb-16">
                    <div className = "flex items-center gap-2">
                        <span>Descargar CV</span>
                        <MdFileDownloadDone className = "text-xl" />
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default MainNav;