import type { Component } from "@genui/core"
import type { BadgeData } from "../types/badge";

import { Badge } from "@/components/ui/badge";
import { getData } from "../utils/getData";

interface Props {
    readonly component: Component;
}

export function BadgeRenderer({ component }: Props) {
    const data = getData<BadgeData>(component);

    return (
        <Badge variant={data.variant ?? "outline"} >
            {data.content ?? "Badge"}
        </Badge>
    )
}
