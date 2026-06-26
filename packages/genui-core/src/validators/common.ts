import { GenUIBusinessValidationError } from "../errors";
import type { GenUIErrorContext } from "../errors";

export function assert(
  condition: unknown,
  message: string,
  path?: string,
  payload?: unknown,
): asserts condition {
  if (!condition) {
    const context: GenUIErrorContext = {
      ...(path !== undefined && { path }),
      ...(payload !== undefined && { payload }),
    };

    throw new GenUIBusinessValidationError(
      `[Business Rule Violation]: ${message}`,
      context,
    );
  }
}
