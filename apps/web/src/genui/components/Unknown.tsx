import { Component } from "@genui/core"

interface Props {
    readonly component: Component;
}

export function UnknownComponent({ component }: Props) {
    return (
        <div className="rounded-md border border-destructive p-4">
            <p className="font-semibold text-destructive">
                Unknown component
            </p>

            <p className="text-sm text-muted-foreground">
                <strong>{component.type}</strong> is not registered.
            </p>
        </div>
    )
}
