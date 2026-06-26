import { z } from "zod";
import { ActionIdSchema, FieldIdSchema } from "./common";

export const FieldBindingSchema = z.object({
  id: FieldIdSchema,
}).strict();

export const ActionBindingSchema = z.object({
  id: ActionIdSchema,
}).strict();
