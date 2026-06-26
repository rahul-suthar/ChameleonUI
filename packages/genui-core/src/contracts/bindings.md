# Binding Architecture Contract

Bindings connect generated UI elements to secure, application-owned logic.

## Binding Types:

### Field Binding
Used explicitly by form-related or input components to handle state variables.

*Examples:*
- `email`
- `username`
- `favorite_tool`
- `project_name`

### Action Binding
Used by action-related components (like buttons or clickable elements) to trigger secure backend executions.

*Examples:*
- `submit_persona`
- `save_settings`
- `create_project`

## Structural Hierarchy

### Data Bindings Mapping
```yaml
Component:
    fieldBinding: string
```

### Event Bindings Mapping
```yaml
Component:
    actionBinding: string
```

## System Constraints

### Field Bindings
- **Access Control**: The AI MAY reference existing field IDs.
- **Strict Sandbox**: The AI MUST NOT invent or generate new field IDs.
- **Data Governance**: Field definitions remain strictly application-owned.
**Security Invariants**: Input validation rules remain application-owned and unalterable by the AI layout engine.

### Action Bindings
- **Access Control**: The AI MAY reference existing action IDs.
- **Strict Sandbox**: The AI MUST NOT invent or forge new action IDs.
- **Logic Isolation**: Action implementation remain strictly application-owned and hidden behind the runtime router.
- **Business Security**: Core application business logic remains completely isolated from the UI layout output.