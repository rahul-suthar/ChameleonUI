import { z } from "zod";
import { SECTION_KINDS } from "../constants";
import { SectionIdSchema } from "./common";
import { ComponentSchema } from "./component";

export const SectionSchema = z.object({
  id: SectionIdSchema,
  kind: z.enum(SECTION_KINDS),
  components: z.array(ComponentSchema),
}).strict();
