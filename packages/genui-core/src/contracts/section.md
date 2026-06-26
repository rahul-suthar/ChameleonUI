# Section Architecture Contract

A Section represents a logical content block inside a Page.

## Allowed Section Kinds:
- `hero`
- `content`
- `feature-grid`
- `form`
- `stats`
- `navigation`
- `footer`

## Structural Hierarchy
```yaml
Page:
    Section:
        kind: SectionKind
        components: Component[]
```

## System Constraints
- **Ownership**: A Section MUST belong to exactly one Page.
- **Nesting**: A Section MUST NOT contain other Sections.
- **Children**: A Section MUST contain at least one Component.
- **Declaration**: A Section MUST declare a valid `kind` from the Allowed Section Kinds list.