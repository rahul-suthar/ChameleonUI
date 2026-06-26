import { z } from "zod";

import type {
  ActionId,
  ComponentId,
  FieldId,
  ISODateString,
  JSONArray,
  JSONObject,
  JSONValue,
  NodeId,
  NonEmptyString,
  PageId,
  SectionId,
} from "../types";

import { PLATFORM_LIMITS } from "../constants";

export function brandSchema<T>() {
  return (value: string) => value as T;
}

export const NonEmptyStringSchema = z
  .string()
  .trim()
  .min(1, "String cannot be empty")
  .max(
    PLATFORM_LIMITS.MAX_TEXT_LENGTH,
    `String cannot exceed ${PLATFORM_LIMITS.MAX_TEXT_LENGTH} characters`,
  )
  .transform(brandSchema<NonEmptyString>());

export const NodeIdSchema = z.string().uuid().transform(brandSchema<NodeId>());
export const PageIdSchema = z.string().uuid().transform(brandSchema<PageId>());

export const SectionIdSchema = z
  .string()
  .uuid()
  .transform(brandSchema<SectionId>());

export const ComponentIdSchema = z
  .string()
  .uuid()
  .transform(brandSchema<ComponentId>());

export const FieldIdSchema = z
  .string()
  .trim()
  .min(1, "Field binding identity string cannot be empty")
  .transform(brandSchema<FieldId>());

export const ActionIdSchema = z
  .string()
  .trim()
  .min(1, "Action binding identity string cannot be empty")
  .transform(brandSchema<ActionId>());

export const ISODateStringSchema = z.iso
  .datetime()
  .transform(brandSchema<ISODateString>());

export const JSONPrimitiveSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
]);

export const JSONValueSchema: z.ZodType<JSONValue> = z.lazy(() =>
  z.union([JSONPrimitiveSchema, JSONObjectSchema, JSONArraySchema]),
);

export const JSONObjectSchema: z.ZodType<JSONObject> = z.record(
  z.string(),
  JSONValueSchema,
);

export const JSONArraySchema: z.ZodType<JSONArray> = z
  .array(JSONValueSchema)
  .readonly();

export const SerializableObjectSchema = JSONObjectSchema;
