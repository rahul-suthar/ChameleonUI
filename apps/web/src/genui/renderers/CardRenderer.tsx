import { Card, CardContent } from "@/components/ui/card"
import type { Component, ContainerComponent } from "@genui/core"
import { ChildrenRenderer } from "../ChildrenRenderer";
import { mapStyle } from "../style";

interface Props {
  readonly component: Component;
}

export function CardRenderer({ component }: Props) {
  const card = component as ContainerComponent;

  return (
    <Card className={mapStyle(component.style)}>
      <CardContent className="space-y-4 pt-6">
        <ChildrenRenderer key={card.id} component={card} />
      </CardContent>
    </Card>
  )
}
