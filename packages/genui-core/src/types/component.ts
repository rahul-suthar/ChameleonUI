import type {
  COMPONENTS_TYPES,
  CONTAINER_COMPONENTS,
  LEAF_COMPONENTS,
} from "../constants/components";

import type { ActionBinding, FieldBinding } from "./bindings";

import type { ComponentId, SerializableObject } from "./common";

import type { StyleIntent } from "./theme";

export type ComponentType = (typeof COMPONENTS_TYPES)[number];
export type ContainerComponentType = (typeof CONTAINER_COMPONENTS)[number];
export type LeafComponentType = (typeof LEAF_COMPONENTS)[number];

export type ComponentData = SerializableObject;

export type Component = ContainerComponent | LeafComponent;

export interface NodeBase {
  readonly id: ComponentId;
  readonly order: number;
  readonly type: ComponentType;
  readonly data: ComponentData;
  readonly style: StyleIntent;
  readonly fieldBinding?: FieldBinding | undefined;
  readonly actionBinding?: ActionBinding | undefined;
}

export interface ContainerComponent extends NodeBase {
  readonly type: ContainerComponentType;
  readonly children: readonly Component[];
}

export interface LeafComponent extends NodeBase {
  readonly type: LeafComponentType;
}
