import type { Section } from "@genui/core"
import { ComponentRenderer } from "./ComponentRenderer";

interface SectionRendererProps {
    readonly section: Section;
}

export function SectionRenderer({ section }: SectionRendererProps) {
    return (
        <section data-section-kind={section.kind}>
            {
                section.components.map((component) => (
                    <ComponentRenderer
                        key={component.id}
                        component={component}
                    />
                ))
            }
        </section>
    )
}
