"use client"

import type { ButtonData } from "../types/button"
import type { Component } from "@genui/core"

import { Button } from "@/components/ui/button"
import { getData } from "../utils/getData"
import { mapStyle } from "../style"
import { useRouter } from "next/navigation"

interface Props {
  readonly component: Component
}

interface MapAction {
  readonly id: string
}

export function ButtonRenderer({ component }: Props) {
  const data = getData<ButtonData>(component);
  const router = useRouter();

  const mapClick = (action: MapAction) => {
    switch (action.id) {
      case "view_repository":
        // router.push('/dash');
        window.open('https://github.com/rahul-suthar/genui-platform-boilerplate', "_blank", "noopener");
        break;

      default:
        router.push('/_not-found');
        break;
    }
  }

  const handleClick = () => {
    if (component.actionBinding === undefined) return;

    mapClick(component.actionBinding)
  }

  return (
    <Button onClick={handleClick} className={mapStyle(component.style)}>
      {data.label}
    </Button>
  )
}

