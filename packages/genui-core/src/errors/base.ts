export interface GenUIErrorContext {
  readonly path?: string;
  readonly payload?: unknown;
  readonly cause?: unknown;
}

export abstract class GenUIError extends Error {
  public readonly context: GenUIErrorContext;

  protected constructor(message: string, context: GenUIErrorContext = {}) {
    super(message);

    this.name = new.target.name;
    this.context = context;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
