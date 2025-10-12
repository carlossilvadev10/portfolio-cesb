"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function WorkTabsClient({ children }) {
    const searchParams = useSearchParams();
    const category = searchParams?.get("category") || "frontend";

    // Clona el elemento hijo de Tabs e inyecta (agrega) el valor predeterminado si es un elemento válido.
    return React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { defaultValue: category });
        }
        return child;
    });
}
