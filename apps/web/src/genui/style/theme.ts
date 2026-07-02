import { ThemeIntent } from "@genui/core";

export function mapTheme(theme: ThemeIntent): string {
  const classes: string[] = [];

  switch (theme.mood) {
    case "developer":
      classes.push("font-mono");
      break;

    case "corporate":
      classes.push("font-sans");
      break;

    case "luxury":
      classes.push("tracking-wide");
      break;
  }

  switch (theme.contrast) {
    case "high":
      classes.push("contrast-125");
      break;

    case "low":
      classes.push("contrast-75");
      break;
  }

  switch (theme.density) {
    case "compact":
      classes.push("space-y-2");
      break;

    case "comfortable":
      classes.push("space-y-4");
      break;

    case "spacious":
      classes.push("space-y-8");
      break;
  }

  switch (theme.palette) {
    case "zinc":
      classes.push("bg-zinc-200");
      break;

    case "slate":
      classes.push("bg-slate-200");
      break;

    case "stone":
      classes.push("bg-stone-200");
      break;

    case "neutral":
      classes.push("bg-neutral-200");
      break;
  }

  return classes.join(" ");
}
