import type { TypographyIntent } from "@genui/core";

export function mapTypography(intent: TypographyIntent): string {
  switch (intent.emphasis) {
    case "display":
      return "text-4xl font-bold";

    case "title":
      return "text-2xl font-semibold";

    case "subtitle":
      return "text-lg font-medium";

    case "body":
      return "text-base";

    case "caption":
      return "text-sm text-muted-foreground";

    default:
      return "";
  }
}
