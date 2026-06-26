import type { Component, ContainerComponent } from "../types";
import { assert } from "./common";

function isContainer(component: Component): component is ContainerComponent {
  return "children" in component;
}

export function validateComponent(component: Component): void {
  if (isContainer(component)) {
    component.children.forEach(validateComponent);
  }

  assert(
    !(component.fieldBinding && component.actionBinding),
    "Component cannot contain both fieldBinding and actionBinding.",
    component.id,
    component,
  );
}
