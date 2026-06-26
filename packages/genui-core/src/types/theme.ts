import type {
  THEME_CONTRASTS,
  THEME_DENSITIES,
  THEME_MOODS,
  THEME_PALETTES,
} from "../constants/themes";

import type { NonEmptyString } from "./common";

export type ThemeMood = (typeof THEME_MOODS)[number];
export type ThemeContrast = (typeof THEME_CONTRASTS)[number];
export type ThemeDensity = (typeof THEME_DENSITIES)[number];
export type ThemePalette = (typeof THEME_PALETTES)[number];

export interface ThemeIntent {
  readonly mood: ThemeMood;
  readonly contrast: ThemeContrast;
  readonly density: ThemeDensity;
  readonly palette: ThemePalette;
}

export interface SurfaceIntent {
  readonly variant: NonEmptyString;
}

export interface TypographyIntent {
  readonly emphasis: NonEmptyString;
}

export interface SpacingIntent {
  readonly density: ThemeDensity;
}

export interface DecorationIntent {
  readonly radius: NonEmptyString;
}

export interface StyleIntent {
  readonly surface: SurfaceIntent;
  readonly typography: TypographyIntent;
  readonly spacing: SpacingIntent;
  readonly decoration: DecorationIntent;
}
