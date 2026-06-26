# Theme Architecture Contract

Theme Intent defines the high-level visual identity of an entire Page. Theme Intent expresses abstract design goals rather than implementation details.

It serves as the global styling context from which Component-level StyleIntents are safely interpreted.

## Example Theme Intents

- `developer`
- `minimal`
- `modern`
- `corporate`
- `luxury`
- `terminal`

## Structural Hierarchy

### Page Theme Placement

```yaml
Page:
  themeIntent:
    mood: ThemeMood
    contrast: ThemeContrast
    density: ThemeDensity
    palette: ThemePalette
```

### Component Style Placement

Each Component owns a local, isolated StyleIntent config.

```yaml
Component:
  style:
    surface: SurfaceIntent
    typography: TypographyIntent
    spacing: SpacingIntent
    decoration: DecorationIntent
```

## Theme Resolution Pipeline

The platform rendering pipeline resolves styling sequentially down two distinct stages:

```text
   [ ThemeIntent ] (Provides global aesthetic direction)
              │
              ▼
    [ Default Design Tokens ] (Bridges the global theme vars)
              │
              ▼
     [ Component StyleIntent ] (Local component overrides)
              │
              ▼
       [ Platform Renderer ] (Orchestrators parse tree)
              │
       ┌──────┴────────────────────────┐
       ▼                               ▼
[ Tailwind Utilities (Web) ]   [ Native Styles (React Native) ]
```

ThemeIntent provides the global aesthetic direction. StyleIntent allows individual Components to express local presentation variations which remaining completely consistent with the overarching Page theme rules.

## System Constraints

- **Isolation of Scope**: ThemeIntent exists exclusively and unalterably at the Page level.
- **Component Guardrail**: StyleIntent exists exclusively and unalterably at the Component level.
- **No Class Injections**: ThemeIntent MUST NOT contain raw Tailwind utility classes.
- **No Stylesheet Injections**: ThemeIntent MUST NOT contain css definitions or inline style tags.
- **Security Sandboxing**: ThemeIntent MUST NOT contain HTML formatting or raw JSX.
- **Declarative Primitives**: Component StyleIntent parameters MUST remain strictly declarative properties.
- **Renderer Responsibility**: Platform renderers are solely responsible for taking these high-level design intents and turning them into real layout implementations.
- **Behavior Invariance**: ThemeIntent MUST NOT override application control flow, route navigation, or secure component behavior patterns.