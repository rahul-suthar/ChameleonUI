# GenUI Implementation Roadmap

This document tracks the implementation progress of the GenUI platform.

Each phase represents a major architectural milestone. A phase is considered complete only when every task within it has been implemented, validated, and integrated into the platform.

---

# Phase 1 — Foundation

**Status:** 🚧 In Progress

## Workspace

* [x] pnpm Workspace
* [x] Turborepo pipeline
* [x] Next.js 16 application
* [ ] React Native / Expo workspace
* [x] Platform-independent `@genui/core`

---

## Architecture Contracts

* [x] Page contract
* [x] Section contract
* [x] Component taxonomy
* [x] Theme contract
* [x] Platform limitation rules

---

## Constants

* [x] Component taxonomy
* [x] Theme definitions
* [x] Section kinds
* [x] Binding definitions
* [x] Style intent vocabulary

---

## Shared Types

* [x] Common branded primitives
* [x] Metadata
* [x] Theme model
* [x] Bindings
* [x] Component tree
* [x] Section model
* [x] Page model

---

## Runtime

* [x] Error hierarchy
* [x] Schema versioning
* [x] Zod schemas
* [x] Business validators
* [x] `parsePage()` runtime entrypoint

---

## Documentation

* [x] README
* [x] Architecture document
* [x] Architecture Decision Records
* [x] Roadmap
* [x] AI Agent guide

---

# Phase 2 — Mock Runtime & Static Rendering

**Status:** ⬜ Planned

## Goals

* [ ] Example page documents
* [ ] Mock data generators
* [ ] Static JSON rendering
* [ ] Snapshot fixtures

---

# Phase 3 — Prompt Compilation

**Status:** ⬜ Planned

## Goals

* [ ] Prompt compiler
* [ ] Contract injection
* [ ] Constant injection
* [ ] Automatic prompt generation
* [ ] Prompt versioning

---

# Phase 4 — AI Inference & Cache Layer

**Status:** ⬜ Planned

## Goals

* [ ] Cerebras client
* [ ] Streaming inference
* [ ] Response normalization
* [ ] Cache abstraction
* [ ] Next.js `use cache`
* [ ] Redis / Vercel KV synchronization

---

# Phase 5 — Web Renderer

**Status:** ⬜ Planned

## Goals

* [ ] Recursive renderer
* [ ] Component registry
* [ ] StyleIntent interpreter
* [ ] ThemeIntent resolver
* [ ] Server Components
* [ ] Streaming layouts

---

# Phase 6 — Mobile Renderer

**Status:** ⬜ Planned

## Goals

* [ ] Expo workspace
* [ ] React Native renderer
* [ ] Shared interpreter
* [ ] Platform styling adapter

---

# Phase 7 — Developer Tooling

**Status:** ⬜ Planned

## Goals

* [ ] Fluent Builder API
* [ ] Document Builder DSL
* [ ] Mock generators
* [ ] Testing helpers
* [ ] CLI utilities

---

# Phase 8 — Production Hardening

**Status:** ⬜ Planned

## Goals

* [ ] Performance profiling
* [ ] Telemetry
* [ ] Analytics
* [ ] Snapshot testing
* [ ] Benchmark suite
* [ ] Observability
* [ ] Production documentation

---

# Long-term Vision

Future packages may include:

```text
packages/
├── builders/
├── renderer-web/
├── renderer-native/
├── prompt/
├── cerebras/
├── cache/
├── testing/
└── cli/
```

Each package must respect the platform architecture, dependency graph, and validation pipeline defined in the architecture documentation.
