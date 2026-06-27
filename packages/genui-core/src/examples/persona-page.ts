import { PLATFORM_SCHEMA_VERSION } from "../schema-version";
import type { Component, Page, Section } from "../types";
import { createISODateString } from "../utils";
import { cardStyle, defaultStyle, heroStyle } from "./styles";
import { defaultTheme } from "./theme";

const metadata: Page["metadata"] = {
  id: "page_persona" as never,
  title: "Developer Persona" as never,
  description:
    "Collect developer preferences before generating a personalzied interface." as never,

  version: PLATFORM_SCHEMA_VERSION,
  generatedAt: createISODateString(),
};

const heroTitle: Component = {
  id: "text_title" as never,
  order: 0,
  type: "text",
  data: {
    content: "Build an interface that matches you.",
    variant: "heading",
  },
  style: heroStyle,
};

const heroDescription: Component = {
  id: "text_description" as never,
  order: 1,
  type: "text",
  data: {
    content:
      "Tell us a little about yourself. We'll generate a UI tailored to your workflow.",
    variant: "body",
  },
  style: defaultStyle,
};

const heroSection: Section = {
  id: "section_hero" as never,
  kind: "hero",
  components: [heroTitle, heroDescription],
};

const formTitle: Component = {
  id: "text_title" as never,
  order: 0,
  type: "text",
  data: {
    content: "Developer Profile",
    variant: "heading",
  },
  style: defaultStyle,
};

const nameInput: Component = {
  id: "input_name" as never,
  order: 1,
  type: "input",
  data: {
    label: "Name",
    placeholder: "John Doe",
  },
  style: defaultStyle,
  fieldBinding: {
    id: "user_name" as never,
  },
};

const roleSelect: Component = {
  id: "select_role" as never,
  order: 2,
  type: "select",
  data: {
    label: "Role",
    options: ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps"],
  },
  style: defaultStyle,
  fieldBinding: {
    id: "user_role" as never,
  },
};

const experienceSelect: Component = {
  id: "select_experience" as never,
  order: 3,
  type: "select",
  data: {
    label: "Experience",
    options: ["Student", "0-2 years", "2-5 years", "5+ years"],
  },
  style: defaultStyle,
  fieldBinding: {
    id: "experience_level" as never,
  },
};

const stackSelect: Component = {
  id: "select_stack" as never,
  order: 4,
  type: "select",
  data: {
    label: "Favorite Stack",
    options: ["MERN", "T3", "Spring Boot", "Django", "Next.js"],
  },
  style: defaultStyle,
  fieldBinding: {
    id: "favorite_stack" as never,
  },
};

const continueButton: Component = {
  id: "button_continue" as never,
  order: 5,
  type: "button",
  data: {
    label: "Generate My Interface",
  },
  style: defaultStyle,
  actionBinding: {
    id: "continue" as never,
  },
};

const formStack: Component = {
  id: "stack_form" as never,
  order: 0,
  type: "stack",
  data: {
    direction: "vertical",
    gap: "md",
  },
  style: defaultStyle,
  children: [
    formTitle,
    nameInput,
    roleSelect,
    experienceSelect,
    stackSelect,
    continueButton,
  ],
};

const formCard: Component = {
  id: "card_form" as never,
  order: 0,
  type: "card",
  data: {},
  style: cardStyle,
  children: [formStack],
};

const formSection: Section = {
  id: "section_form" as never,
  kind: "form",
  components: [formCard],
};

export const personaPage: Page = {
  metadata,
  themeIntent: defaultTheme,
  sections: [heroSection, formSection],
};

// optional sanity check during development
//
// import { parsePage } from "../validators";
//
// parsePage(personaPage);
