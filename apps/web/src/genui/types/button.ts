export interface ButtonData {
  readonly label: string;
  readonly variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";

  readonly size?: "default" | "sm" | "lg" | "icon";
}
