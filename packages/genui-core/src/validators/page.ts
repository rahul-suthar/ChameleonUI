import type { Page } from "../types";
import { validateSection } from "./section";

export function validatePage(page: Page): void {
  page.sections.forEach(validateSection);
}
