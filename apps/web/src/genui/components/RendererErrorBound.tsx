"use client"

import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class RendererErrorBound extends Component<Props, State> {
    state: State = {
        hasError: false
    }

    static getDerivedStateFromError(): State {
        return {
            hasError: true,
        };
    }

    override render() {
        if (this.state.hasError) {
            return (
                <main className="flex min-h-screen items-center justify-center">
                    <p className="text-destructive">
                        Renderer crashed.
                    </p>
                </main>
            )
        }

        return this.props.children
    }

}
