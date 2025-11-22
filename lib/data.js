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

export const servicesOptions = [
    {
        icon: "/assets/services/frontend.svg",
        alt: "frontend-icon",
        value: "frontend",
        label: "Desarrollo frontend",
    },
    {
        icon: "/assets/services/backend.svg",
        alt: "backend-icon",
        value: "backend",
        label: "Desarrollo backend",
    },
    {
        icon: "/assets/services/fullstack.svg",
        alt: "fullstack-icon",
        value: "fullstack",
        label: "Desarrollo full stack",
    },
    {
        icon: "/assets/services/design.svg",
        alt: "design-icon",
        value: "design",
        label: "Diseño UX/UI",
    },
    {
        icon: "/assets/services/seo.svg",
        alt: "seo-icon",
        value: "seo",
        label: "Optimización SEO",
    },
    {
        icon: "/assets/services/video.svg",
        alt: "video-icon",
        value: "video",
        label: "Producción de videos",
    }
];

export const projects = [
    {
        id: 1,
        category: "frontend",
        title: "EShop CESB - Tienda Online Moderna",
        description: "Landing page atractiva y funcional, diseñada con React y Tailwind CSS, enfocada en presentar una tienda online de dispositivos tecnológicos con productos seleccionados para brindar calidad, estilo y rendimiento.",
        image: "/assets/work/thumb1.png",
        alt: "project-1",
        link: "https://eshop-cesb.netlify.app/",
        github: "https://github.com/carlossilvadev10/eshop-cesb",
        tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        id: 2,
        category: "frontend",
        title: "Event Horizont - Centro de Eventos",
        description: "Landing page dinámica y responsiva creada con React, Tailwind CSS y Next.js, destinada a conectar usuarios con eventos y experiencias culturales, ofreciendo navegación fluida y optimización SEO.",
        image: "/assets/work/thumb2.png",
        alt: "project-2",
        link: "https://event-horizont.netlify.app/",
        github: "https://github.com/carlossilvadev10/event-horizont",
        tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"]
    },
    {
        id: 3,
        category: "frontend",
        title: "Tripi Travel – Portal de Viajes",
        description: "Landing page moderna y adaptativa desarrollada con React, Tailwind CSS y Next.js, que facilita a los usuarios la búsqueda y reserva de alojamientos, priorizando una experiencia de usuario rápida y cómoda.",
        image: "/assets/work/thumb3.png",
        alt: "project-3",
        link: "https://tripi-travel-web.netlify.app/",
        github: "https://github.com/carlossilvadev10/tripi-travel",
        tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
        id: 4,
        category: "frontend",
        title: "Shop Cart - Tienda Comercial",
        description: "Landing page sencilla y funcional desarrollada con React y Bootstrap, enfocada en ofrecer una experiencia clara y atractiva para la compra de productos deportivos y artículos para el hogar.",
        image: "/assets/work/thumb4.png",
        alt: "project-4",
        link: "https://github.com/carlossilvadev10/shop-cart",
        github: "https://github.com/carlossilvadev10/shop-cart",
        tech: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Sass"]
    },
    {
        id: 5,
        category: "frontend",
        title: "Nike Store - Tienda Online Deportiva",
        description: "Landing page moderna e intuitiva desarrollada con React y Tailwind CSS. Presenta una tienda online inspirada en Nike, enfocada en resaltar productos deportivos con diseño responsivo, alto rendimiento y una experiencia de usuario optimizada.",
        image: "/assets/work/thumb5.png",
        alt: "project-5",
        link: "https://nike-store-sport.vercel.app/",
        github: "https://github.com/carlossilvadev10/nike-store",
        tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
        id: 6,
        category: "frontend",
        title: "Fit Physique - Plataforma Fitness Motivacional",
        description: "Landing page moderna y motivadora desarrollada con React, Tailwind CSS y Next.js, que presenta rutinas, productos y contenido fitness para inspirar a los usuarios a alcanzar su mejor versión.",
        image: "/assets/work/thumb6.png",
        alt: "project-6",
        link: "https://fit-physique-phi.vercel.app/",
        github: "https://github.com/carlossilvadev10/fit-physique",
        tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
        id: 7,
        category: "full stack",
        title: "Mesa de Partes – Sistema Administrativo",
        description: "Aplicación web full stack desarrollada en PHP para gestionar trámites y documentación institucional.",
        image: "/assets/work/thumb7.png",
        alt: "project-7",
        link: "#",
        github: "https://github.com/carlossilvadev10/SistemaMesadePartesUNJFSC",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL" ]
    },
];

export const categories = ["frontend", "backend", "full stack", "ux/ui"];

export const journey = [
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
];

export const navLinks = [
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
];

export const testimonials = [
    {
        message: "Trabajar con Carlos fue una experiencia muy positiva; supo captar exactamente lo que necesitaba y lo plasmó en un diseño funcional y atractivo.",
        name: "Jhon Oblitas",
        profession: "Mobile Developer",
        linkedin: "https://www.linkedin.com/in/jhon-oblitas/"
    },
    {
        message: "Carlos tiene una gran capacidad para resolver problemas y proponer soluciones creativas; su compromiso con los detalles marca la diferencia.",
        name: "Rodrigo Trejo",
        profession: "Full Stack Developer",
        linkedin: "https://www.linkedin.com/in/rodrigoatldev/"
    },
    {
        message: "Su habilidad para unir estética y funcionalidad en un proyecto es admirable; siempre entrega resultados por encima de lo esperado.",
        name: "Sergio Quiñones",
        profession: "Gestión de proyectos",
        linkedin: "https://www.linkedin.com/in/sergio-luis-qui%C3%B1ones-huapaya-a44239317/"
    },
];