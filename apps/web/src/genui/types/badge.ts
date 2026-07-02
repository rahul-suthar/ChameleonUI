export interface BadgeData {
  readonly content: string;
  readonly variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
}
