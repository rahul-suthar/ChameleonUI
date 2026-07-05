# ChameleonUI Architecture

## Vision

ChameleonUI is a platform-agnostic Generative UI framework.

Instead of generating executable code, the AI generates structured JSON documents describing **what** should be rendered.

Platform specific renderers such as Next.js and React-Native decide how those documents are rendered.

This strict separation enables secure, deterministic, and reusable user interfaces across multiple platforms.

---

# Architectural Goals

The architecture is designed around five primary goals.

- **Platform Independence**: The same UI document can be rendered on Web, Mobile, or future platforms.
- **Deterministic Rendering**: Every valid document produces a predictable interface.
- **Security**: AI never generates executable code or application logic.
- **Extensibility**: New components, renderers, and platforms can be added without changing existing contracts.
- **Runtime Validation**: Every generated document is validated before rendering.

---

# Core Principles

## Functional vs Presentational Separation

Application behavior belongs to the application.

Presentation belongs to the AI.

Business logic is never delegated to the language model.

---

## Secure by Design

The AI **cannot** generate:

- JSX
- HTML
- CSS
- JavaScript
- TypeScript
- React components
- Event handlers

The AI generates **validated JSON documents only**.

---

## Runtime Safety

Every generated document follows the same validation pipeline:

```text
Semantic Page
    │
    ▼
parsePage()
    │
    ├─ Zod Schema Validation
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

`parsePage()` is the mandatory runtime entry point before rendering. Invalid documents are rejected before they reach any platform renderer.

---

# Package Structure

```text
packages/
└── genui-core/
    • Architectural Contracts
    • Constants
    • Shared Types
    • Runtime Schemas
    • Validators
    • Prompt Templates
    • Parsing Pipeline
    • Platform Independent

apps/
├── web/
│   • Next.js Renderer
│   • Component Registry
│   • Platform Renderers
│   • StyleIntent / ThemeIntent Mapping
│   • UI Library Integration
│
└── mobile/ (planned)
    • React Native Renderer
```

`@genui/core` must remain completely platform independent.

It must never depends on:

- React
- Next.js
- React-Native
- Browser APIs
- Node-specific rendering logic

---

# Dependency Graph

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
builders (future)
      │
      ▼
renderers
```

## Dependency Rules

- Dependencies always flow downward.
- Circular dependencies are prohibited.
- Lower layers must never import higher layers.
- Every layer has a single responsibilty.

---

# Document Hierarchy

Every UI document follows a fixed hierarchy.

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

## Hierarchy Rules

- A Page owns Sections.
- A Section owns Components.
- Container Components own child Components.
- Leaf Component never own children.
- Pages never contain Components directly.
- Sections never contain Sections.

The hierarchy is immutable.

---

# Component Taxonomy

## Container Components

Container Components own layout and composition.

Examples:

- Stack
- Grid
- Card
- Navigation
- Footer
- Hero

Containers may contain child Components.

---

## Leaf Components

Leaf Components represent interaction or presentation.

Examples:

- Button
- Input
- Checkbox
- Avatar
- Text
- Badge

Leaf Components can never contain children.

---

# Styling Philosophy

The AI never generates CSS.

Instead, it expresses visual intent.

```text
ThemeIntent
      │
      ▼
StyleIntent
      │
      ▼
Platform Renderer
      │
      ▼
Platform Styles
```

Current StyleIntent domains:

- Surface
- Typography
- Spacing
- Decoration

StyleIntent describes **visual intent**, not implementation.

Each renderer is responsible for translating those intents into platform-specific styling systems.

---

## Style and Theme Mapping

Generated documents contain only abstract intent.

```text
ThemeIntent
      │
      ▼
StyleIntent
      │
      ▼
Renderer Mapping
      │
      ▼
UI Library Props / Platform Styles
```

The Web renderer maps `StyleIntent / ThemeIntent` into UI library compatible styling decisions. The generated document never contains Tailwind classes, CSS, inline styles, or platform objects. 

---

# Bindings

Application behavior is predefined.

The AI only references existing identifiers.

Supported bindings:

- FieldBinding
- ActionBinding

Binding Rules:

- A component may declare at most one binding.
- Bindings reference existing application identifiers.
- Binding identifiers are validated before rendering.
- The AI never creates new bindings.

---

# Serialization Rules

Every generated document must be valid JSON.

Allowed values:

- Objects
- Arrays
- Strings
- Numbers
- Booleans
- Null

Not allowed:

- Functions
- Date
- Map
- Set
- Symbol
- Class Instances
- Platform-specific objects

Only deterministic JSON values are permitted.

---

# Validation Philosophy

Validation occurs in multiple independent layers.

```text
TypeScript
Compile-time correctness
        │
        ▼
Zod
Runtime shape validation
        │
        ▼
Business Validators
Architectural correctness
        │
        ▼
Platform Renderer
UI interpretation
```

Each layer validates the output of the previous layer.

---

# Rendering Pipeline

Every generated interface follows the same deterministic lifecycle.

```text
User Context
      │
      ▼
Prompt Compilation
      │
      ▼
LLM JSON Generation
      │
      ▼
Zod Validation
      │
      ▼
Business Validation
      │
      ▼
Parsed Page Document
      │
      ▼
Component Registry
      │
      ▼
Platform Renderers
      │
      ▼
UI Library Components
```

Each stage has a single responsibility.

Every stage validates its input before passing control to the next stage.

---

# Future Architecture

The platform is designed to expand without changing the existing contracts.

```text
packages/
├── builders/           (planned)
├── prompt/             (planned)
├── renderer-native/    (planned)
├── cerebras/           (planned)
└── cache/              (planned)
```

Future packages must respect the existing dependency graph and architectural boundaries.