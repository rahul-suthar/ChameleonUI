import type { StyleIntent } from "../types";

export const defaultStyle: StyleIntent = {
  surface: {
    variant: "plain" as never,
  },
  typography: {
    emphasis: "body" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "sm" as never,
  },
};

export const heroStyle: StyleIntent = {
  surface: {
    variant: "elevated" as never,
  },
  typography: {
    emphasis: "display" as never,
  },
  spacing: {
    density: "spacious",
  },
  decoration: {
    radius: "xl" as never,
  },
};

export const heroSubtitleStyle: StyleIntent = {
  surface: {
    variant: "muted" as never,
  },
  typography: {
    emphasis: "lede" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "sm" as never,
  },
};

export const badgeStyle: StyleIntent = {
  surface: {
    variant: "accent" as never,
  },
  typography: {
    emphasis: "caption" as never,
  },
  spacing: {
    density: "compact",
  },
  decoration: {
    radius: "pill" as never,
  },
};

export const cardStyle: StyleIntent = {
  surface: {
    variant: "panel" as never,
  },
  typography: {
    emphasis: "body" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "xl" as never,
  },
};

export const sectionStackStyle: StyleIntent = {
  surface: {
    variant: "canvas" as never,
  },
  typography: {
    emphasis: "body" as never,
  },
  spacing: {
    density: "spacious",
  },
  decoration: {
    radius: "none" as never,
  },
};

export const cardTitleStyle: StyleIntent = {
  surface: {
    variant: "transparent" as never,
  },
  typography: {
    emphasis: "subtitle" as never,
  },
  spacing: {
    density: "compact",
  },
  decoration: {
    radius: "none" as never,
  },
};

export const metricValueStyle: StyleIntent = {
  surface: {
    variant: "transparent" as never,
  },
  typography: {
    emphasis: "metric" as never,
  },
  spacing: {
    density: "compact",
  },
  decoration: {
    radius: "none" as never,
  },
};

export const primaryActionStyle: StyleIntent = {
  surface: {
    variant: "callout" as never,
  },
  typography: {
    emphasis: "action" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "lg" as never,
  },
};

export const formFieldStyle: StyleIntent = {
  surface: {
    variant: "field" as never,
  },
  typography: {
    emphasis: "body" as never,
  },
  spacing: {
    density: "comfortable",
  },
  decoration: {
    radius: "md" as never,
  },
};

export const dividerStyle: StyleIntent = {
  surface: {
    variant: "separator" as never,
  },
  typography: {
    emphasis: "caption" as never,
  },
  spacing: {
    density: "compact",
  },
  decoration: {
    radius: "none" as never,
  },
};
