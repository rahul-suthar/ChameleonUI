import type { Component } from "@genui/core"
import type { ImageData } from "../types/image";

import { getData } from "../utils/getData";

interface Props {
    readonly component: Component;
}

export function ImageRenderer({ component }: Props) {
    const data = getData<ImageData>(component);

    const src = data.src ?? "https://api.dicebear.com/7.x/pixel-art/svg?seed=genui";
    const alt = data.alt ?? "placeholder image";

    return (
        <img className="h-80" src={src} alt={alt} />
    )
}
