# AGENTS.md

## Project Summary

GenUI is a platform-agnostic Generative UI framework.

AI generates JSON documents.

Renderers interpret those documents.

The AI never generates executable code.

---

# Architectural Rules

Always preserve the dependency graph.

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

builders

↓

renderers

Never violate this order.

---

# Package Rules

packages/ui-core

Must remain platform independent.

Never import:

- React
- React Native
- Next.js
- Expo
- DOM APIs

Only shared architecture belongs here.

---

# Serialization Rules

Documents must be JSON serializable.

Never introduce:

- functions
- callbacks
- JSX
- HTML
- CSS
- DOM nodes
- platform objects

---

# Validation Rules

Never bypass validation.

Always use:

parsePage()

Never call renderer directly with AI output.

---

# Component Rules

Leaf components never own children.

Container components may own children.

Pages own Sections.

Sections own Components.

Components own Components.

Nothing else.

---

# Styling Rules

The AI expresses intent.

The renderer chooses implementation.

Never hardcode Tailwind classes inside generated documents.

Never expose CSS to the AI.

---

# Development Guidelines

Prefer immutable data.

Prefer readonly arrays.

Prefer branded primitive types.

Prefer composition over inheritance.

Avoid circular imports.

Keep files small and focused.

---

# Current Status

Completed:

- Monorepo
- Contracts
- Constants
- Types
- Error hierarchy

In Progress:

- Zod schemas
- Validators
- parsePage()

Next:

- Mock renderer
- Builder layer
- Cerebras integration