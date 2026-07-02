import type { Component, ContainerComponent } from "@genui/core"
import { ChildrenRenderer } from "../ChildrenRenderer";
import { cn } from "@/lib/utils";
import { mapStyle } from "../style";

interface Props {
  readonly component: Component
}

export function StackRenderer({ component }: Props) {
  const stack = component as ContainerComponent;

  return (
    <div className={cn("flex flex-col", mapStyle(component.style))}>
      <ChildrenRenderer key={stack.id} component={stack} />
    </div>
  )
}
