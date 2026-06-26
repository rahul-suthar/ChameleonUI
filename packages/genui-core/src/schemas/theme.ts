import { z } from "zod";

import {
  THEME_CONTRASTS,
  THEME_DENSITIES,
  THEME_MOODS,
  THEME_PALETTES,
} from "../constants";

import { NonEmptyStringSchema } from "./common";

export const ThemeMoodSchema = z.enum(THEME_MOODS);
export const ThemeContrastschema = z.enum(THEME_CONTRASTS);
export const ThemeDensitySchema = z.enum(THEME_DENSITIES);
export const ThemePaletteSchema = z.enum(THEME_PALETTES);

export const SurfaceIntentSchema = z.object({
  variant: NonEmptyStringSchema,
}).strict();

export const TypographyIntentSchema = z.object({
  emphasis: NonEmptyStringSchema,
}).strict();

export const SpacingIntentSchema = z.object({
  density: ThemeDensitySchema,
}).strict();

export const DecorationIntentSchema = z.object({
  radius: NonEmptyStringSchema,
}).strict();

export const StyleIntentSchema = z.object({
  surface: SurfaceIntentSchema,
  typography: TypographyIntentSchema,
  spacing: SpacingIntentSchema,
  decoration: DecorationIntentSchema,
}).strict();

export const ThemeIntentSchema = z.object({
  mood: ThemeMoodSchema,
  contrast: ThemeContrastschema,
  density: ThemeDensitySchema,
  palette: ThemePaletteSchema,
}).strict();
