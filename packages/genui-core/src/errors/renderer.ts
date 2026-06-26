import { GenUIError, type GenUIErrorContext } from "./base";

export class GenUIRendererError extends GenUIError {
  constructor(message: string, context: GenUIErrorContext = {}) {
    super(message, context);
  }
}
