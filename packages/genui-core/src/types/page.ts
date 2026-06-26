import type { Metadata } from "./metadata";
import type { Section } from "./section";
import type { ThemeIntent } from "./theme";

export interface Page {
  readonly metadata: Metadata;
  readonly themeIntent: ThemeIntent;
  readonly sections: ReadonlyArray<Section>;
}
