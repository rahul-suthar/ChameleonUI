# GenUI Platform Architecture

## Vision

GenUI is a platform-agnostic Generative UI framework.

The AI generates structured JSON documents that describe *what* should be rendered.

Platform-specific renderers (Next.js, React Native, etc.) decide *how* to render those documents.

The AI never generates executable code.

---

# Core Principles

## Functional vs Presentational Separation

Application logic is owned by the application.

Presentation is owned by the AI.

The AI never owns business logic.

---

## Secure by Design

The AI CANNOT generate:

- JSX
- HTML
- CSS
- JavaScript
- TypeScript
- React components
- Event handlers

The AI ONLY generates structured JSON.

---

## Runtime Safety

Every AI response must pass:

AI Output

↓

Zod Schema Validation

↓

Business Validation

↓

Renderer

Invalid documents are rejected before rendering.

---

## Package Structure

packages/

ui-core/

Shared architecture.

Shared contracts.

Shared constants.

Shared types.

Shared schemas.

Shared validators.

Shared prompts.

Platform independent.

No React.

No Next.js.

No React Native.

---

apps/

web/

Next.js renderer.

SSR.

Server Components.

AI orchestration.

---

mobile/

React Native renderer.

---

## Dependency Graph

contracts

↓

constants

↓

types

↓

schemas

↓

validators

↓

builders (future)

↓

renderers

No upward dependencies.

No circular imports.

---

## Document Hierarchy

Page

↓

Section

↓

Component

↓

Children

The hierarchy is immutable.

Components never own Pages.

Sections never own Sections.

Pages never own Components directly.

---

## Component Taxonomy

Container Components

Own children.

Examples:

- Stack
- Grid
- Card
- Navigation
- Footer
- Hero

Leaf Components

Cannot own children.

Examples:

- Button
- Input
- Checkbox
- Avatar
- Text
- Badge

---

## Styling Philosophy

The AI does not generate CSS.

The AI expresses intent.

ThemeIntent

↓

StyleIntent

↓

Renderer

↓

Platform-specific styling

Current StyleIntent domains:

- Surface
- Typography
- Spacing
- Decoration

The renderer maps intents to actual styles.

---

## Bindings

Application logic is predefined.

The AI binds components to existing identifiers.

Supported bindings:

FieldBinding

ActionBinding

A component may not contain both simultaneously.

---

## Serialization Rules

Every document must be valid JSON.

No functions.

No Dates.

No Maps.

No Sets.

No Symbols.

No platform-specific objects.

Only JSON-compatible values.

---

## Validation Philosophy

TypeScript

Compile-time correctness.

↓

Zod

Runtime shape validation.

↓

Business Validators

Architectural correctness.

↓

Renderer

Platform-specific interpretation.

---

## Future Architecture

builders/

Developer-friendly document builders.

prompt/

Prompt compiler.

renderer-web/

Next.js interpreter.

renderer-native/

React Native interpreter.

cerebras/

Inference client.

cache/

Response caching.
