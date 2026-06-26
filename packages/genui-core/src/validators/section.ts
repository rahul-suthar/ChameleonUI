import type { Section } from "../types";
import { validateComponent } from "./component";

export function validateSection(section: Section): void {
  section.components.forEach(validateComponent);
}
