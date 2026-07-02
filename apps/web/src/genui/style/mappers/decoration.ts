import type { DecorationIntent } from "@genui/core";

export function mapDecoration(intent: DecorationIntent): string {
  switch (intent.radius) {
    case "none":
      return "";

    case "sm":
      return "rounded-sm";

    case "md":
      return "rounded-md";

    case "lg":
      return "rounded-lg";

    case "full":
      return "rounded-full";

    default:
      return "";
  }
}
