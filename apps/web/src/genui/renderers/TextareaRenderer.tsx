import type { Component } from "@genui/core"
import type { TextareaData } from "../types/textarea";

import { getData } from "../utils/getData";
import { Textarea } from "@/components/ui/textarea";

interface Props {
    readonly component: Component;
}

export function TextareaRenderer({ component }: Props) {
    const data = getData<TextareaData>(component);

    return (
        <Textarea placeholder={data.placeholder} />
    )
}
