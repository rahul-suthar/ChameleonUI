# Platform Limitations Contract

This contract defines the absolute physical, performance, and security boundaries of the Generative UI engine.

## Tree Constraints

- **Maximum Sections Per Page**: 15
- **Maximum Component Depth**: 6 (For nested Container Components like stacks/grids)
- **Maximum Children Per Node**: 20
- **Maximum Components Per Page**: 200 (Total structural node count across all sections)

## Object Model Constraints

- **Model Inheritance**: Every Component MUST strictly inherit the shared `NodeBase` structure model.
- **Data Serialization**: Every Component MUST own a 100% network-serializable `Data` object map.
- **Design Tokens**: Every Component MUST own a structured `StyleIntent` object configuration block.
- **Nesting Permissions**: Only Container Components MAY contain a nested `children` property array.
- **Flat Endpoints**: Leaf Components MUST NOT contain a `children` property or key configuration under any circumstance.
- **Hierarchical Layout Rules**: Every generated UI blueprint document MUST strictly satisfy the `Page → Section → Component` structural hierarchy chain before passing into runtime validation.

## Content Constraints

- **Maximum Text Length**: 500 characters per individual text, description, or heading node block.

## Security Constraints

- **No HTML generation**: Absolute prohibition of text strings containing code tags (`<div>`, `<script>`, etc.).
- **No CSS generation**: Absolute prohibition of raw stylesheet attributes or inline utility injection strings.
- **No JSX generation**: Absolute prohibition of client-side or framework-native layout element strings.
- **No JavaScript generation**: Absolute prohibition of runtime code logic, event bindings, or inline function bodies.
- **No executable code generation**: Any payload containing unapproved executable script instructions or expressions will trigger an immediate, fatal runtime system drop.

## Rendering Constraints

- **Component Validation**: Components MUST use approved component types explicitly listed in the system taxonomy constants.
- **Data Bindings Validation**: Components MUST strictly use approved, application-owned data fields and action bindings.
- **Runtime Guard**: Layout structural blocks MUST pass 100% strict schema validation (Zod parsing engine) before being delivered to the frontend web or mobile rendering pipelines.