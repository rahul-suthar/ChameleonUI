export interface RadioOption {
  readonly label: string;
  readonly value: string;
}

export interface RadioData {
  readonly label?: string;
  readonly options: readonly RadioOption[];
  readonly defaulValue?: string;
}
