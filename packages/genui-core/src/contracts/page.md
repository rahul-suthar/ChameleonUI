# Page Architecture Contract

A Page represents a single renderable screen.

## Examples:

- Persona Form Page
- Generated Dashboard Page
- Settings Page

## Structural Hierarchy

```yaml
Page:
  metadata:
    id: string
    title: string
    description: string
    version: string
    generatedAt: isodatestring
  themeIntent: ThemeIntent
  sections: Section[]
```

## System Constraints

- **Maximum Sections**: 15
- **Direct Placement**: A Page MUST NOT contain Components directly. It can only host Sections.
- **Independence**: A Page MUST be independently renderable and independently cacheable.
