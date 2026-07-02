import type { Component } from "@genui/core"
import { componentRegistry } from "./registry";
import { UnknownComponent } from "./components/Unknown";

interface ComponentRendererProps {
    readonly component: Component;
}

export function ComponentRenderer({ component }: ComponentRendererProps) {
    const Renderer = componentRegistry[component.type] ?? UnknownComponent;

    return (
        <Renderer
            component={component}
        />
    );

    // return (
    //     <pre>
    //         {JSON.stringify(component, null, 2)}
    //     </pre>
    // )
}
