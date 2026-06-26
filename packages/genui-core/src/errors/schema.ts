import { GenUIError, type GenUIErrorContext } from "./base";

export class GenUISchemaValidationError extends GenUIError {
  constructor(message: string, context: GenUIErrorContext = {}) {
    super(message, context);
  }
}
