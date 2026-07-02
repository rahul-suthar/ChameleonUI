import type { Component } from "@genui/core";
import type { ComponentType } from "react";

import { ButtonRenderer } from "./renderers/ButtonRenderer";
import { CardRenderer } from "./renderers/CardRenderer";
import { TextRenderer } from "./renderers/TextRenderer";
import { InputRenderer } from "./renderers/InputRenderer";
import { SelectRenderer } from "./renderers/SelectRenderer";
import { StackRenderer } from "./renderers/StackRenderer";
import { GridRenderer } from "./renderers/GridRenderer";
import { HeadingRenderer } from "./renderers/HeadingRenderer";
import { BadgeRenderer } from "./renderers/BadgeRenderer";
import { ImageRenderer } from "./renderers/ImageRenderer";
import { DividerRenderer } from "./renderers/DividerRenderer";
import { CheckboxRenderer } from "./renderers/CheckboxRenderer";
import { TextareaRenderer } from "./renderers/TextareaRenderer";
import { RadioRenderer } from "./renderers/RadioRenderer";

export interface RendererProps {
  readonly component: Component;
}

export type ComponentRenderer = ComponentType<RendererProps>;

export const componentRegistry: Record<Component["type"], ComponentRenderer> = {
  button: ButtonRenderer,
  card: CardRenderer,
  input: InputRenderer,
  select: SelectRenderer,
  stack: StackRenderer,
  text: TextRenderer,

  grid: GridRenderer,
  footer: StackRenderer,
  navbar: StackRenderer,

  checkbox: CheckboxRenderer,
  textarea: TextareaRenderer,
  radio: RadioRenderer,

  badge: BadgeRenderer,
  image: ImageRenderer,
  avatar: ImageRenderer,
  divider: DividerRenderer,
  heading: HeadingRenderer,
};
