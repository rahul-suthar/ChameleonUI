# Component Architecture Contract

A Component represents the smallest renderable UI element within a Section.

All elements are strict specializations of the shared **NodeBase** model architecture.

## Component Taxonomy

### Layout Components

- `stack`
- `grid`
- `card`
- `section`

### Content Components

- `heading`
- `text`
- `badge`
- `divider`

### Form Components

- `input`
- `textarea`
- `select`
- `checkbox`
- `radio`

### Action Components

- `button`

### Navigation Components

- `navbar`
- `footer`

### Media Components

- `image`
- `avatar`

## Structural Hierarchy

### Section Structure

```yaml
Section:
  components:
    - Component
```

### Shared NodeBase Structure

Every Component strictly inherits this common base structural matrix.

```yaml
NodeBase:
  id: ComponentId
  type: ComponentType
  data: ComponentData
  style: StyleIntent
```

### Container Components

Container Components extend the NodeBase model and explicitly permit recursive nesting.

```yaml
ContainerComponent:
  extends: NodeBase

  type: stack | grid | card | section | navbar | footer
  children: Component
```

### Leaf Components

Leaf Components extend the NodeBase model but are completely flat endpoints.

```yaml
LeafComponent:
  extends: NodeBase

  type: heading | text | badge | divider | input | textarea | select | checkbox | radio | button | image | avatar
```

## Component Data

Component Data represent semantic and structural data variables only.

- **Allowed Value Types**: `string`, `number`, `boolean`, `null`, standard arrays, and flat plain objects.
- **Serialization**: Component Data MUST remain 100% network-serializable.
- **Prohibition**: Component Data MUST NOT contain functions, callbacks, event handlers, raw DOM references, HTML elements, JSX tags, or executable script expressions.

## Style Intent

Every Component owns an isolated, local StyleIntent block which expresses presentation targets rather than platform-specific code primitives.

```yaml
style:
  surface: SurfaceIntent
  typography: TypographyIntent
  spacing: SpacingIntent
  decoration: DecorationIntent
```

## System Constraints

- **Validation**: Components MUST use an approved Component Type.
- **Strict Scope**: Components MUST NOT invent new Component Types.
- **Inheritance**: Components MUST strictly inherit the NodeBase shape model.
- **Serialization**: Components MUST contain serializable Data parameters.
- **Design Tokens**: Components MUST contain a multi-layered StyleIntent object configuration.
- **Containers**: Container Components MAY contain nested children elements.
- **Leaf Elements**: Leaf Components MUST NOT contain children under any condition.
- **Security Guardrail**: Components MUST NOT contain executable code, raw HTML, or client-side JSX.
