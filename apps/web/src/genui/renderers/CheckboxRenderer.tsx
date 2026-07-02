import type { Component } from "@genui/core";
import type { CheckboxData } from "../types/checkbox";

import { getData } from "../utils/getData";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
    readonly component: Component;
}

export function CheckboxRenderer({ component }: Props) {
    const data = getData<CheckboxData>(component);

    return (
        <div className="flex items-center gap-2">
            <Checkbox />
            <span>{data.label}</span>
        </div>
    )
}
