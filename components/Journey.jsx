import React from "react";

const journey = [
    {
        years: "2024 - presente",
        profession: "Desarrollador y diseñador web",
        institution: "Instituto Peruano para el Desarrollo de la Educación, Ciencia, Tecnología e Informática",
    },
    {
        years: "2021 - 2025",
        profession: "Estudiante | Ingeniería de Sistemas",
        institution: "Universidad Nacional José Faustino Sánchez Carrión",
    }
]

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