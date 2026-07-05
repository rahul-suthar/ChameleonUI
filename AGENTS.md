# AGENTS.md

## Project Overview

ChameleonUI is a platform-agnostic Generative UI framework.

Large Language Models generate structured JSON documents describing user interfaces.

Platform-specific renderers interpret those documents into native UI.

The AI never generates executable code.

---

# Primary Objective

Always preserve the separation between:

* Application Logic
* UI Presentation

Business logic belongs to the application.

Presentation belongs to the generated document.

---

# Architecture Layers

The dependency graph is immutable.

```text
contracts
      │
      ▼
constants
      │
      ▼
types
      │
      ▼
schemas
      │
      ▼
validators
      │
      ▼
builders
      │
      ▼
renderers
```

## Rules

* Dependencies only flow downward.
* Never create circular imports.
* Never move business logic into lower layers.
* Do not skip architectural layers.

---

# Repository Layout

```text
apps/
├── web/
└── mobile/ (planned)

packages/
└── genui-core/
```

## apps/

Contains platform-specific renderers.

Platform code belongs here.

## packages/genui-core/

Contains shared runtime logic.

Must remain platform independent.

---

# Platform Restrictions

Never import these into `@genui/core`:

* React
* React Native
* Next.js
* Expo
* Browser APIs
* DOM APIs

Only shared runtime architecture belongs inside `@genui/core`.

---

# Serialization Rules

Generated documents must be completely JSON serializable.

Never introduce:

* Functions
* Callbacks
* JSX
* HTML
* CSS
* DOM Nodes
* Class instances
* Symbols
* Platform-specific objects

---

# Validation Rules

Never trust raw AI output.

Always validate using:

```ts
parsePage()
```

Validation pipeline:

```text
AI Output / Semantic Page
    │
    ▼
parsePage()
    │
    ├─ Zod Validation
    │
    └─ Business Validation
    │
    ▼
Component Registry
    │
    ▼
Platform Renderers
    │
    ▼
UI Library
```

Do not bypass this pipeline.

---

# Component Rules

Hierarchy is fixed.

```text
Page
 │
 ▼
Section
 │
 ▼
Component
 │
 ▼
Children
```

Rules:

* Pages own Sections.
* Sections own Components.
* Container Components own Components.
* Leaf Components never own children.

---

# Styling Rules

The AI expresses intent.

Renderers implement styling.

Never expose:

* Tailwind classes
* CSS
* React styling APIs

Generated documents should only contain:

* ThemeIntent
* StyleIntent

---

# Development Guidelines

Prefer:

* Immutable objects
* `readonly` arrays
* Branded primitive types
* Composition over inheritance
* Small focused modules
* Deterministic runtime behavior

Avoid:

* Circular imports
* Platform coupling
* Shared mutable state
* Runtime side effects

---

# Before Editing

When introducing a new feature:

1. Determine its architectural layer.
2. Verify dependency direction.
3. Update contracts if required.
4. Update types before schemas.
5. Update schemas before validators.
6. Preserve backward compatibility whenever possible.

---

# Current Project Status

## Completed

* Monorepo
* Turborepo
* Next.js application
* Shared `@genui/core`
* Architecture contracts
* Constants
* Shared types
* Runtime schemas
* Validators
* `parsePage()` runtime entry point
* Web renderer MVP
* Component registry
* Style/theme intent mapping layer
* Documentation

## Next Milestone

Expand renderer component coverage, improve renderer ergonomics, and prepare the builder layer.

---

# Success Criteria

Every contribution should preserve these guarantees:

* Platform independence
* Deterministic rendering
* Runtime validation
* JSON-only document model
* Strict architectural boundaries
* Separation of logic and presentation
