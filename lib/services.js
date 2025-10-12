export const services = [
    {
        slug: "desarrollo-frontend",
        icon: "/assets/services/frontend.svg",
        alt: "Icono desarrollo frontend",
        title: "Desarrollo frontend",
        short: "Interfaces rápidas y accesibles usando React, Next.js y TypeScript.",
        description: "Construyo interfaces modernas, responsivas y accesibles aplicando buenas prácticas de rendimiento, componentes reutilizables y tests. Puedo integrar diseño desde Figma y optimizar para SEO y accesibilidad.",
        color: "bg-gradient-to-r from-sky-400 to-indigo-600",
        image: "/assets/services/frontend-hero.png"
    },
    {
        slug: "desarrollo-backend",
        icon: "/assets/services/backend.svg",
        alt: "Icono desarrollo backend",
        title: "Desarrollo backend",
        short: "APIs escalables y seguras con Node.js, Express y bases de datos.",
        description: "Diseño y desarrollo de APIs REST/GraphQL, autenticación, autorización y optimización de consultas. Arquitecturas limpias pensadas para escalabilidad y mantenimiento.",
        color: "bg-gradient-to-r from-emerald-400 to-teal-600",
        image: "/assets/services/backend-hero.png"
    },
    {
        slug: "full-stack",
        icon: "/assets/services/fullstack.svg",
        alt: "Icono desarrollo full stack",
        title: "Desarrollo full stack",
        short: "Soluciones completas: frontend, backend y despliegue.",
        description: "Proyectos end-to-end: diseño de UI, APIs, integración y despliegue en Vercel, AWS o DigitalOcean. Enfocado en la calidad y entrega continua.",
        color: "bg-gradient-to-r from-fuchsia-400 to-pink-600",
        image: "/assets/services/fullstack-hero.png"
    },
    {
        slug: "diseno-ux-ui",
        icon: "/assets/services/design.svg",
        alt: "Icono diseño UX/UI",
        title: "Diseño UX/UI",
        short: "Diseños centrados en el usuario y prototipos interactivos.",
        description: "Investigación de usuario, wireframes y prototipos de alta fidelidad. Trabajo con Figma y convierto diseños en componentes accesibles y reutilizables.",
        color: "bg-gradient-to-r from-yellow-400 to-orange-500",
        image: "/assets/services/design-hero.png"
    },
    {
        slug: "optimizacion-seo",
        icon: "/assets/services/seo.svg",
        alt: "Icono optimización SEO",
        title: "Optimización SEO",
        short: "Mejoras técnicas y de contenido para visibilidad orgánica.",
        description: "Auditorías SEO, optimización de meta tags, estructura de contenidos y performance para mejorar ranking y velocidad de carga.",
        color: "bg-gradient-to-r from-lime-400 to-emerald-600",
        image: "/assets/services/seo-hero.png"
    },
    {
        slug: "produccion-videos",
        icon: "/assets/services/video.svg",
        alt: "Icono producción de videos",
        title: "Producción de videos",
        short: "Videos corporativos y animaciones explicativas.",
        description: "Edición, motion graphics y vídeos optimizados para web y redes sociales que cuentan historias y convierten visitantes en clientes.",
        color: "bg-gradient-to-r from-cyan-400 to-blue-500",
        image: "/assets/services/video-hero.png"
    }
];

export function getServiceBySlug(slug) {
    return services.find(s => s.slug === slug);
}
