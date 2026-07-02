import type { Component } from "@genui/core"
import type { HeadingData } from "../types/heading";

import { getData } from "../utils/getData";

interface Props {
    readonly component: Component;
}

export function HeadingRenderer({ component }: Props) {
    const data = getData<HeadingData>(component);

    const content = data.content ?? "Missing heading";
    const level = data.level ?? 2;

    switch (level) {
        case 1:
            return <h1 className="text-4xl font-bold" >{content}</h1>

        case 2:
            return <h2 className="text-3xl font-semibold" >{content}</h2>

        case 3:
            return <h3 className="text-2xl font-semibold" >{content}</h3>

        case 4:
            return <h4 className="text-xl font-medium" >{content}</h4>

        case 5:
            return <h5 className="text-lg font-medium" >{content}</h5>

        default:
            return <h6 className="font-medium" >{content}</h6>
    }
}
