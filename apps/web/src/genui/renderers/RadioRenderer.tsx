import type { Component } from "@genui/core"
import type { RadioData } from "../types/radio";

import { getData } from "../utils/getData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
    readonly component: Component;
}

export function RadioRenderer({ component }: Props) {
    const data = getData<RadioData>(component);

    return (
        <RadioGroup defaultValue={data.defaulValue} >
            {data.options.map((option, i) => (
                <div key={i} className="flex items-center gap-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <label htmlFor={option.value}>{option.label}</label>
                </div>
            ))}
        </RadioGroup>
    )
}
