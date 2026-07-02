import type { Component, ContainerComponent } from "@genui/core"
import { ChildrenRenderer } from "../ChildrenRenderer";

interface Props {
    readonly component: Component;
}

export function GridRenderer({ component }: Props) {
    const grid = component as ContainerComponent;

    return (
        <div className="grid gap-4 md:grid-cols-2">
            <ChildrenRenderer key={grid.id} component={grid} />
        </div>
    )
}
