import { GenUIError, type GenUIErrorContext } from "./base";

export class GenUIBusinessValidationError extends GenUIError {
  constructor(message: string, context: GenUIErrorContext = {}) {
    super(message, context);
  }
}
