# Architecture Decision Records

This document records the major architectural decisions made throughout the development of GenUI.

Each ADR captures the context, the decision, and the reasoning behind it. Once accepted, an ADR represents the architectural direction of the project and should only change through a new ADR.

---

# ADR-001: JSON Instead of Executable UI Code

## Status

Accepted

## Decision

The language model generates structured JSON documents instead of JSX, HTML, CSS, JavaScript, or TypeScript.

## Rationale

Generating executable code introduces security risks, platform coupling, and inconsistent outputs.

Structured JSON provides:

- Platform independence
- Deterministic parsing
- Runtime validation
- Safer AI interaction
- Renderer portability

---

# ADR-002: Separate Functional Schema from Presentation

## Status

Accepted

## Decision

Business logic and application behavior remain owned by the application.

The AI is responsible only for presentation.

## Rationale

Separating behavior from appearance allows:

- Secure business logic
- Predictable application workflows
- Unlimited UI personalization
- Independent evolution of application logic and design

---

# ADR-003: Runtime Validation with Zod

## Status

Accepted

## Decision

Every generated document must pass Zod validation before entering the rendering pipeline.

## Rationale

Compile-time TypeScript cannot validate AI-generated JSON.

Zod provides:

- Runtime validation
- Excellent TypeScript integration
- Vendor independence
- Compatibility with open-weight models running on Cerebras

---

# ADR-004: Container / Leaf Component Taxonomy

## Status

Accepted

## Decision

Components are divided into two categories:

- Container Components
- Leaf Components

Only Container Components may own children.

## Rationale

This taxonomy enforces a valid UI hierarchy while simplifying recursive rendering and validation.

It prevents impossible UI structures before they reach the renderer.

---

# ADR-005: Platform-independent Core Package

## Status

Accepted

## Decision

`@genui/core` must never depend on React, Next.js, React Native, or browser APIs.

## Rationale

The shared package represents the canonical document model.

Keeping it platform-independent allows the same contracts, validators, and schemas to be reused across every renderer.

---

# ADR-006: Schema-first Development

## Status

Accepted

## Decision

Contracts, constants, and types are designed before renderer implementation.

Renderers consume the schema rather than defining it.

## Rationale

A schema-first approach ensures every platform implements the same document contract while reducing implementation drift between Web and Mobile.

---

# ADR-007: Multi-layer Validation Pipeline

## Status

Accepted

## Decision

Generated documents pass through multiple independent validation stages before rendering.

```text
TypeScript
      │
      ▼
Zod Schema Validation
      │
      ▼
Business Validation
      │
      ▼
Platform Renderer
```

## Rationale

Each layer validates a different concern.

This keeps the renderer simple while providing deterministic runtime guarantees.

---

# ADR-008: AI Generates Intent, Not Implementation

## Status

Accepted

## Decision

The AI generates abstract design intent rather than concrete styling instructions.

## Rationale

Instead of producing CSS or platform-specific styles, the model expresses:

- ThemeIntent
- StyleIntent

Each renderer maps those intents into its own styling system.

This keeps prompts portable while allowing every platform to evolve independently.