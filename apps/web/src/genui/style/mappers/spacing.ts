import type { SpacingIntent } from "@genui/core";

export function mapSpacing(intent: SpacingIntent): string {
  switch (intent.density) {
    case "compact":
      return "gap-2";

    case "comfortable":
      return "gap-4";

    case "spacious":
      return "gap-8";

    default:
      return "";
  }
}
