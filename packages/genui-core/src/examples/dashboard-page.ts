import { PLATFORM_SCHEMA_VERSION } from "../schema-version";
import type { Page } from "../types";
import { createISODateString } from "../utils";
import { defaultTheme } from "./theme";

export const dashboardPage: Page = {
  metadata: {
    id: "page_dashboard" as never,
    title: "Developer Dashboard" as never,
    description: "Placeholde dashboard page." as never,
    version: PLATFORM_SCHEMA_VERSION,
    generatedAt: createISODateString(),
  },
  themeIntent: defaultTheme,
  sections: [],
};
