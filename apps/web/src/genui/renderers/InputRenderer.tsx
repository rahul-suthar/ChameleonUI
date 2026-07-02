import type { Component } from "@genui/core"
import type { InputData } from "../types/input"

import { getData } from "../utils/getData"
import { Input } from "@/components/ui/input"

interface Props {
  readonly component: Component
}

export function InputRenderer({ component }: Props) {
  const data = getData<InputData>(component);

  return (
    <Input
      placeholder={data.placeholder}
    />
  )
}
