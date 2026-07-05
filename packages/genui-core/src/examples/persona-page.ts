import { PLATFORM_SCHEMA_VERSION } from "../schema-version";
import type { Component, Page, Section } from "../types";
import { createISODateString } from "../utils";
import { parsePage } from "../validators";
import {
  badgeStyle,
  cardStyle,
  cardTitleStyle,
  defaultStyle,
  heroStyle,
  heroSubtitleStyle,
  primaryActionStyle,
  sectionStackStyle,
} from "./styles";

const metadata = {
  id: "11111111-1111-4111-8111-111111111111",
  title: "Developer Profile",
  description: "Developer portfolio",
  version: PLATFORM_SCHEMA_VERSION,
  generatedAt: createISODateString(),
};

const themeIntent = {
  mood: "developer",
  contrast: "high",
  density: "compact",
  palette: "zinc",
};

const heroTitle: Component = {
  id: "22222222-2222-4222-8222-222222222222" as never,
  type: "heading",
  order: 1,
  style: heroStyle,
  data: {
    content: "Rahul Suthar",
  },
};

const heroSubtitle: Component = {
  id: "33333333-3333-4333-8333-333333333333" as never,
  type: "text",
  order: 2,
  style: heroSubtitleStyle,
  data: {
    content: "Backend Engineer building GenUI.",
  },
};

const heroBadge: Component = {
  id: "44444444-4444-4444-8444-444444444444" as never,
  type: "badge",
  order: 3,
  style: badgeStyle,
  data: {
    content: "Open to Internship",
    variant: "secondary",
  },
};

const heroStack: Component = {
  id: "55555555-5555-4555-8555-555555555555" as never,
  type: "stack",
  order: 1,
  style: sectionStackStyle,
  data: {},
  children: [heroTitle, heroSubtitle, heroBadge],
};

const heroSection: Section = {
  id: "66666666-6666-4666-8666-666666666666" as never,
  kind: "hero",
  components: [heroStack],
};

const projectHeading: Component = {
  id: "77777777-7777-4777-8777-777777777777" as never,
  type: "heading",
  order: 1,
  style: cardTitleStyle,
  data: {
    content: "ChameleonUI",
  },
};

const projectText: Component = {
  id: "88888888-8888-4888-8888-888888888888" as never,
  type: "text",
  order: 2,
  style: defaultStyle,
  data: {
    content: "Platform-agnostic Generative UI framework.",
  },
};

const projectButton: Component = {
  id: "99999999-9999-4999-8999-999999999999" as never,
  type: "button",
  order: 3,
  style: primaryActionStyle,
  data: {
    label: "View Repository",
  },
  actionBinding: {
    id: "view_repository" as never,
  },
};

const projectCard: Component = {
  id: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa" as never,
  type: "card",
  order: 1,
  style: cardStyle,
  data: {},
  children: [projectHeading, projectText, projectButton],
};

const projectSection: Section = {
  id: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb" as never,
  kind: "content",
  components: [projectCard],
};

const rawPersonaPage = {
  metadata,
  themeIntent,
  sections: [heroSection, projectSection],
};

export const personaPage: Page = parsePage(rawPersonaPage);
