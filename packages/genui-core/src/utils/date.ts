import type { ISODateString } from "../types";

export function createISODateString(): ISODateString {
  return new Date().toISOString() as ISODateString;
}
