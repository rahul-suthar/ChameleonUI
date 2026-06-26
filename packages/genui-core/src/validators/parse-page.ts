import { GenUISchemaValidationError } from "../errors";
import { PageSchema } from "../schemas";
import type { Page } from "../types";
import { validatePage } from "./page";

export function parsePage(input: unknown): Page {
  const result = PageSchema.safeParse(input);

  if (!result.success) {
    throw new GenUISchemaValidationError("Invalid page schema.", {
      payload: result.error.flatten(),
    });
  }

  validatePage(result.data);

  return result.data;
}
