import type { SECTION_KINDS } from "../constants/sections";
import type { SectionId } from "./common";
import type { Component } from "./component";

export type SectionKind = (typeof SECTION_KINDS)[number];

export interface Section {
  readonly id: SectionId;
  readonly kind: SectionKind;
  readonly components: ReadonlyArray<Component>;
}
