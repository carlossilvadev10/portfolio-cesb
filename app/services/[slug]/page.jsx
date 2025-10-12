import React from "react";
import { getServiceBySlug } from "../../../lib/services";
import ServiceDetailClient from "../../../components/ServiceDetailClient";

export async function generateMetadata({ params }) {
    const service = getServiceBySlug(params.slug);
    if (!service) return {};

    return {
        title: `${service.title} — Servicios`,
        description: service.short,
        openGraph: {
            title: `${service.title} — Servicios`,
            description: service.short,
            images: service.image ? [{ url: service.image }] : undefined,
        }
    };
}

export async function generateStaticParams() {
    const { services } = await import("../../../lib/services");
    return services.map(s => ({ slug: s.slug }));
}

const ServicePage = ({ params }) => {
    const { slug } = params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
        <main className = "container mx-auto py-24">
            <h1 className = "h2">
                Servicio no encontrado
            </h1>
            <p className = "mt-4">
                El servicio que buscas no existe o fue movido.
            </p>
            <Link href = "/services" className = "btn btn-accent mt-6">Volver a servicios</Link>
        </main>
        );
    }

    // Asociar el slug del servicio con la categoría de proyecto usada en /work
    const slugToCategory = {
        "desarrollo-frontend": "frontend",
        "desarrollo-backend": "backend",
        "full-stack": "full stack",
        "diseno-ux-ui": "ux/ui",
        "optimizacion-seo": "frontend",
        "produccion-videos": "frontend"
    };

    const relatedCategory = slugToCategory[service.slug];
    const workHref = relatedCategory ? `/work?category=${encodeURIComponent(relatedCategory)}` : "/work";

    // Renderiza un componente del servidor que delega la interfaz de usuario interactiva a un componente del cliente.
    return (
        <main className = "min-h-screen flex items-center py-12">
            <div className = "container mx-auto w-full">
                <ServiceDetailClient service = {service} workHref = {workHref} />
            </div>
        </main>
    );
};

export default ServicePage;