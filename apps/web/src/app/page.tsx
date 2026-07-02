import { PageRenderer } from "@/genui";
import { RendererErrorBound } from "@/genui/components/RendererErrorBound";
import { personaPage } from "@genui/core";

export default function Home() {
  return (
    <RendererErrorBound>
      <PageRenderer page={personaPage} />
    </RendererErrorBound>
  )
}
