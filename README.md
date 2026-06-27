# GenUI Platform Boilerplate

A platform-agnostic Generative UI framework that separates application logic from presentation, allowing AI to generate personalized user interfaces while keeping business logic secure, deterministic, and platform independent.

> **Most applications personalize what users see. GenUI personalizes how they see it.**

## Why GenUI

Modern applications personalize content such as videos, products, articles, and recommendations while presenting them through a fixed interface.

GenUI extends personalization to the interface itself.

Instead of generating same UI for every user, applications can generate entirely different visual experiences while preserving identical business logic, workflows, security guarantees, and application behavior.

The result is strict separation between:

- **Functional Schema**: What the application does.
- **Presentation Layer**: How the application appears.

## Current Status

### Completed

- ✅ pnpm workspace
- ✅ Turborepo
- ✅ Next.js Web Application
- ✅ Shared `@genui/core` Package
- ✅ Architectural Contracts
- ✅ Runtime Schemas
- ✅ Validators
- ✅ Type-safe Parsing Pipeline

### In Progress

- 🚧 Recursive UI Renderer
- 🚧 Next.js Interpretation Engine

### Planned

- ⬜ React-Native Interpretation Engine
- ⬜ Cerebras Cloud Integration
- ⬜ Multi-tier Cache Layer
- ⬜ Server-Driven UI Runtime

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- pnpm Workspace
- Turborepo
- Zod
- Tailwind CSS v4
- React Native (planned)
- Cerebras Cloud (planned)

## Repositry Structure

```text
apps/
│
├── web/
└── mobile/             # Planned

packages/
│
└── genui-core/

docs/
├── ARCHITECTURE.md
├── DECISIONS.md
└── ROADMAP.md

AGENTS.md
README.md
```

## Why `@genui/core`

`@genui/core` is the platform independent runtime shared across every application in this repository.

It acts as the single source of truth for the entire Generative UI ecosystem.

It contains:

- Architectural Contracts
- Shared Types
- Runtime Schemas
- Validators
- Parsing Pipeline
- Constants
- Error Definitons

## Core Principles

- Functional schema and presentation remain completely independent.
- AI never generates executable code.
- Every generated UI tree is validated before rendering.
- Shared contracts remain platform independent.
- Business logic is never controlled by the language model.

## Documentation

| Document                                         | Purpose                                             |
| ------------------------------------------------ | --------------------------------------------------- |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | Overall system architecture and design rationale    |
| [`docs/DECISIONS.md`](./docs/DECISIONS.md)       | Architectural decisions and trade-offs              |
| [`docs/ROADMAP.md`](./docs/ROADMAP.md)           | Project milestones and implementation roadmap       |
| [`AGENTS.md`](./AGENTS.md)                       | Guidelines and constraints for AI coding assistants |

## Development

### Repository Structure

This repository uses a shell script to consistently map the workspace tree. To view or export the current architecture structure, run:

```bash
./structure.sh
```

To view the internal monorepo package dependencies and workspace links, run:

```bash
pnpm list -r --depth 0
```

### Getting Started

Follow these steps in order to install, validate, and run the workspace locally:

```bash
# 1. Install dependencies across the monorepo workspace
pnpm install

# 2. Run linting checks across all packages
pnpm lint

# 3. Perform a workspace-wide TypeScript type-check
pnpm -r exec tsc --noEmit

# 4. Build all packages and applications (populates internal Turborepo cache)
pnpm build

# 5. Start the development environment
pnpm dev
```

## Vision

GenUI aims to provide a secure, deterministic, platform-agnostic runtime where large language models generate structure instead of code.

By constraining AI to validated schemas rather than executable output, the framework enables personalized interfaces while preserving application security, maintainability, and predictable behavior.
