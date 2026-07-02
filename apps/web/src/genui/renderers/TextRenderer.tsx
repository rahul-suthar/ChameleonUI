import type { Component } from "@genui/core"
import type { TextData } from "../types/text";

import { getData } from "../utils/getData";
import { mapStyle } from "../style";

interface Props {
  readonly component: Component;
}

export function TextRenderer({ component }: Props) {
  const data = getData<TextData>(component);
  return (
    <p className={mapStyle(component.style)}>
      {data.content}
    </p>
  )
}
