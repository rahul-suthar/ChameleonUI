import { GenUIError, type GenUIErrorContext } from "./base";

export class GenUIInferenceError extends GenUIError {
  constructor(message: string, context: GenUIErrorContext = {}) {
    super(message, context);
  }
}
