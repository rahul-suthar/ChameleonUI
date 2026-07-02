import type { Component } from "@genui/core";

export function getData<T extends object>(component: Component): Readonly<T> {
  return component.data as Readonly<T>;
}
