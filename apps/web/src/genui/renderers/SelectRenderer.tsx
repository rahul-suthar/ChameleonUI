import type { SelectData } from "../types/select"
import type { Component } from "@genui/core"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getData } from "../utils/getData"

interface Props {
  readonly component: Component
}

export function SelectRenderer({ component }: Props) {
  const data = getData<SelectData>(component);

  return (
    <Select>
      <SelectTrigger>
        <SelectValue
          placeholder={data.label ?? "Choose"}
        />
      </SelectTrigger>

      <SelectContent>
        {(data.options ?? []).map((option, i) => (
          <SelectItem
            key={i}
            value={option}
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
