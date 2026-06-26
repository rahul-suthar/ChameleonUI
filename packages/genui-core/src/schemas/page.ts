import { z } from "zod";
import { MetadataSchema } from "./metadata";
import { ThemeIntentSchema } from "./theme";
import { SectionSchema } from "./section";

export const PageSchema = z
  .object({
    metadata: MetadataSchema,
    themeIntent: ThemeIntentSchema,
    sections: z.array(SectionSchema).readonly(),
  })
  .strict();
