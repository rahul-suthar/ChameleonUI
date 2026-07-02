import { cn } from "@/lib/utils";
import type { StyleIntent } from "@genui/core";

import { mapSurface } from "./mappers/surface";
import { mapSpacing } from "./mappers/spacing";
import { mapTypography } from "./mappers/typography";
import { mapDecoration } from "./mappers/decoration";

export function mapStyle(style: StyleIntent): string {
  return cn(
    mapSurface(style.surface),
    mapTypography(style.typography),
    mapSpacing(style.spacing),
    mapDecoration(style.decoration),
  );
}
