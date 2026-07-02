import type { SurfaceIntent } from "@genui/core";

export function mapSurface(intent: SurfaceIntent): string {
  switch (intent.variant) {
    case "primary":
      return "bg-primary text-primary-foreground";

    case "secondary":
      return "bg-secondary text-secondary-foreground";

    case "muted":
      return "bg-muted text-muted-foreground";

    case "outline":
      return "border";

    case "ghost":
      return "";

    default:
      return "";
  }
}
