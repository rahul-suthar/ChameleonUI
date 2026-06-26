# ADR-001

Decision:
LLM generates JSON instead of JSX.

Reason:
Platform independence.
Security.
Validation.

---

# ADR-002

Decision:
Separate Functional Schema from Presentational Layout.

Reason:
Application owns logic.
AI owns aesthetics.

---

# ADR-003

Decision:
Use Zod as runtime validation layer.

Reason:
Vendor independent.
Works with Cerebras.
Works with open-weight models.

---

# ADR-004

Decision:
Container vs Leaf component taxonomy.

Reason:
Enforces valid UI hierarchy at compile time and runtime.