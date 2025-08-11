import React from "react";
import { RiHtml5Fill, RiCss3Fill, RiBootstrapFill, RiJavascriptFill, RiReactjsFill, RiTailwindCssFill, RiNodejsFill, RiNextjsFill, RiPhpFill, RiJavaFill, RiDatabase2Fill } from "react-icons/ri";
import { SiTypescript, SiSass, SiLaravel, SiMysql, SiFigma } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skills = [
    {
        icon: <RiHtml5Fill />,
        name: "HTML",
    },
    {
        icon: <RiCss3Fill />,
        name: "CSS",
    },
    {
        icon: <RiBootstrapFill />,
        name: "Bootstrap",
    },
    {
        icon: <RiJavascriptFill />,
        name: "JavaScript",
    },
    {
        icon: <SiTypescript />,
        name: "TypeScript",
    },
    {
        icon: <RiReactjsFill />,
        name: "React",
    },
    {
        icon: <RiTailwindCssFill />,
        name: "Tailwind CSS",
    },
    {
        icon: <SiSass />,
        name: "Sass",
    },
    {
        icon: <RiNodejsFill />,
        name: "Node.js",
    },
    {
        icon: <RiNextjsFill />,
        name: "Next.js",
    },
    {
        icon: <SiLaravel />,
        name: "Laravel",
    },
    {
        icon: <RiPhpFill />,
        name: "PHP",
    },
    {
        icon: <RiJavaFill />,
        name: "Java",
    },
    {
        icon: <SiMysql />,
        name: "MySQL",
    },
    {
        icon: <RiDatabase2Fill />,
        name: "SQL Server",
    },
    {
        icon: <SiFigma />,
        name: "Figma",
    },
]

const Skills = () => {
    return (
        <div className = "">
            <h2 className = "h2 mb-8">
                Mis <span className = "text-accent">Habilidades</span>
            </h2>
            <div className = "flex flex-wrap gap-6 max-w-sm xl:max-w-none">
                {
                    skills.map((skill, i) => (
                        <TooltipProvider key = {i}>
                            <Tooltip>
                                <TooltipTrigger className = "w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                                    <div className = "text-3xl group-hover:text-accent transition-all duration-300">
                                        {skill.icon}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className = "text-lg">
                                        {skill.name}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;