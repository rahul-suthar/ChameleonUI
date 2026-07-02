import type { Page } from "@genui/core"
import { SectionRenderer } from "./SectionRenderer"
import { cn } from "@/lib/utils"
import { mapTheme } from "./style"
import EmptyPage from "./components/EmptyPage"

interface PageRendererProps {
    readonly page: Page
}

export function PageRenderer({ page }: PageRendererProps) {
    return (
        <main className={cn("min-h-screen flex flex-col px-10 py-8", mapTheme(page.themeIntent))}>
            {!page.sections || page.sections.length === 0 ? (
                <EmptyPage />
            ) : (
                page.sections.map((section) => (
                    <SectionRenderer
                        key={section.id}
                        section={section}
                    />
                ))
            )}
        </main>
    )
}
