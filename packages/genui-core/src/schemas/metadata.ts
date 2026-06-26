import { z } from "zod";

import { PLATFORM_SCHEMA_VERSION } from "../schema-version";

import {
  ISODateStringSchema,
  NonEmptyStringSchema,
  PageIdSchema,
} from "./common";

export const MetadataSchema = z.object({
  id: PageIdSchema,
  title: NonEmptyStringSchema,
  description: NonEmptyStringSchema,
  version: z.literal(PLATFORM_SCHEMA_VERSION),
  generatedAt: ISODateStringSchema,
}).strict();

export type MetadataInput = z.input<typeof MetadataSchema>;
export type MetadataOutput = z.output<typeof MetadataSchema>;
