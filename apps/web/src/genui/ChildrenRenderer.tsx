import type { ContainerComponent } from "@genui/core";
import { ComponentRenderer } from "./ComponentRenderer";

interface ChildrenRendererProps {
    readonly component: ContainerComponent;
}

export function ChildrenRenderer({ component }: ChildrenRendererProps) {
    return (
        <>
            {component.children.map((child) => (
                <ComponentRenderer key={child.id} component={child} />
            ))}
        </>
    )
}
