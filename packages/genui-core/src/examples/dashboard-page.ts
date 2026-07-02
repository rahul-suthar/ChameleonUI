import { PLATFORM_SCHEMA_VERSION } from "../schema-version";
import type { Component, Page, Section } from "../types";
import { createISODateString } from "../utils";
import { parsePage } from "../validators";
import {
  cardStyle,
  cardTitleStyle,
  defaultStyle,
  heroStyle,
  metricValueStyle,
  sectionStackStyle,
} from "./styles";

const metadata = {
  id: "11111111-1111-4111-8111-111111111112",
  title: "Operations Dashboard",
  description: "System Overview",
  version: PLATFORM_SCHEMA_VERSION,
  generatedAt: createISODateString(),
};

const themeIntent = {
  mood: "corporate",
  contrast: "medium",
  density: "comfortable",
  palette: "slate",
};

const overviewHeading: Component = {
  id: "22222222-2222-4222-8222-222222222223" as never,
  type: "heading",
  order: 1,
  style: heroStyle,
  data: {
    content: "Production Overview",
  },
};

const overviewText: Component = {
  id: "33333333-3333-4333-8333-333333333334" as never,
  type: "text",
  order: 2,
  style: defaultStyle,
  data: {
    content: "Current infrastructure status.",
  },
};

const overviewStack: Component = {
  id: "44444444-4444-4444-8444-444444444445" as never,
  type: "stack",
  order: 1,
  style: sectionStackStyle,
  data: {},
  children: [overviewHeading, overviewText],
};

const overviewSection: Section = {
  id: "55555555-5555-4555-8555-555555555555" as never,
  kind: "hero",
  components: [overviewStack],
};

const cpuTitle: Component = {
  id: "66666666-6666-4666-8666-666666666666" as never,
  type: "heading",
  order: 1,
  style: cardTitleStyle,
  data: {
    content: "CPU Usage",
  },
};

const cpuValue: Component = {
  id: "77777777-7777-4777-8777-777777777777" as never,
  type: "text",
  order: 2,
  style: metricValueStyle,
  data: {
    content: "73%",
  },
};

const cpuCard: Component = {
  id: "88888888-8888-4888-8888-888888888888" as never,
  type: "card",
  order: 1,
  style: cardStyle,
  data: {},
  children: [cpuTitle, cpuValue],
};

const memoryTitle: Component = {
  id: "99999999-9999-4999-8999-999999999990" as never,
  type: "heading",
  order: 1,
  style: cardTitleStyle,
  data: {
    content: "Memory",
  },
};

const memoryValue: Component = {
  id: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaab" as never,
  type: "text",
  order: 2,
  style: metricValueStyle,
  data: {
    content: "12.4 GB",
  },
};

const memoryCard: Component = {
  id: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbc" as never,
  type: "card",
  order: 2,
  style: cardStyle,
  data: {},
  children: [memoryTitle, memoryValue],
};

const statsGrid: Component = {
  id: "cccccccc-cccc-4ccc-8ccc-cccccccccccd" as never,
  type: "grid",
  order: 1,
  style: sectionStackStyle,
  data: {},
  children: [cpuCard, memoryCard],
};

const statsSection: Section = {
  id: "dddddddd-dddd-4ddd-8ddd-ddddddddddde" as never,
  kind: "content",
  components: [statsGrid],
};

const rawDashboardPage = {
  metadata,
  themeIntent,
  sections: [overviewSection, statsSection],
};

export const dashboardPage: Page = parsePage(rawDashboardPage);
