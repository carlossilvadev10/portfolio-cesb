import React from "react";
import { journey } from "@/lib/data";

const Journey = () => {
    return (
        <div className = "flex flex-col">
            <h2 className = "h2 mb-8">
                Educación y <span className = "text-accent">Experiencia</span>
            </h2>
            {
                journey.map(({ years, profession, institution }, i) => (
                    <div key = {i} className = "flex items-center gap-12 w-full">
                        <div className = "flex flex-col w-max justify-center items-center">
                            <div className = "w-3 h-3 bg-accent rounded-full" />
                            <div className = "w-[1px] h-[240px] md:h-[210px] bg-white/10" />
                        </div>
                        <div className = "max-w-[500px] my-4">
                            <p className = "mb-2 text-lg text-white/50">
                                {years}
                            </p>
                            <h4 className = "h4 mb-2">
                                {profession}
                            </h4>
                            <p className = "text-lg text-white/50">
                                {institution}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Journey;