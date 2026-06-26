import { z } from "zod";

import {
  COMPONENTS_TYPES,
  CONTAINER_COMPONENTS,
  LEAF_COMPONENTS,
} from "../constants";

import { ComponentIdSchema, SerializableObjectSchema } from "./common";

import { StyleIntentSchema } from "./theme";

import { ActionBindingSchema, FieldBindingSchema } from "./bindings";
import type { Component, ComponentData, ContainerComponent, LeafComponent } from "../types";

export const ComponentDataSchema: z.ZodType<ComponentData> =
  SerializableObjectSchema;

export const NodeBaseSchema = z
  .object({
    id: ComponentIdSchema,
    order: z.number().int().nonnegative(),
    type: z.enum(COMPONENTS_TYPES),
    data: ComponentDataSchema,
    style: StyleIntentSchema,
    fieldBinding: FieldBindingSchema.optional(),
    actionBinding: ActionBindingSchema.optional(),
  })
  .strict();

export const ComponentSchema: z.ZodType<Component> = z.lazy(() =>
  z.union([LeafComponentSchema, ContainerComponentSchema]),
);

export const LeafComponentSchema: z.ZodType<LeafComponent> =
  NodeBaseSchema.extend({
    type: z.enum(LEAF_COMPONENTS),
  }).strict();

export const ContainerComponentSchema: z.ZodType<ContainerComponent> = 
NodeBaseSchema.extend({
  type: z.enum(CONTAINER_COMPONENTS),

  children: z.array(ComponentSchema).readonly(),
}).strict();
