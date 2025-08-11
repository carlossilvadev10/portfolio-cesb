import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser, HiOutlineLocationMarker } from "react-icons/hi"

const Info = () => {
    return (
        <div className = "flex flex-col gap-6 md:gap-10">
            <div className = "flex flex-col md:flex-row gap-4">
                <div className = "w-[280px] flex items-start gap-4">
                    <HiOutlineUser className = "text-2xl mt-1 text-accent" />
                    <div className = "">
                        <p className = "text-lg">Fecha de nacimiento</p>
                        <p>10 de julio de 2004</p>
                    </div>
                </div>
                <div className = "w-[280px] flex items-start gap-4">
                    <HiOutlineMail className = "text-2xl mt-1 text-accent" />
                    <div className = "">
                        <p className = "text-lg">Correo electrónico</p>
                        <p>carlozzsilva10@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className = "flex flex-col md:flex-row gap-4">
                <div className = "w-[280px] flex items-start gap-4">
                    <HiOutlinePhone className = "text-2xl mt-1 text-accent" />
                    <div className = "">
                        <p className = "text-lg">Celular</p>
                        <p>+51 924 141 969</p>
                    </div>
                </div>
                <div className = "w-[280px] flex items-start gap-4">
                    <HiOutlineLocationMarker className = "text-2xl mt-1 text-accent" />
                    <div className = "">
                        <p className = "text-lg">Ubicación</p>
                        <p>Lima, Perú</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;