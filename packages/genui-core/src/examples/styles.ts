import type { StyleIntent } from "../types";

export const defaultStyle: StyleIntent = {
  surface: {
    variant: "default" as never,
  },
  typography: {
    emphasis: "normal" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "md" as never,
  },
};

export const heroStyle: StyleIntent = {
  surface: {
    variant: "hero" as never,
  },
  typography: {
    emphasis: "bold" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "lg" as never,
  },
};

export const cardStyle: StyleIntent = {
  surface: {
    variant: "card" as never,
  },
  typography: {
    emphasis: "normal" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "lg" as never,
  },
};
