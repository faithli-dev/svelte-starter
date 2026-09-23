# Matt Pocock skills integration

Source:
https://github.com/mattpocock/skills

License: MIT.

This starter vendors a focused subset of the workflow rather than the entire collection.

## Why

The primary failure mode this integration targets is misalignment: an agent implementing a plausible interpretation rather than the user's intended product.

The default flow is:

```text
project-intent
     ↓
grill-with-docs
     ↓
grilling + domain-modeling
     ↓
to-spec
     ↓
codebase-design / tdd
     ↓
implement
     ↓
code-review
  ├─ Standards
  └─ Spec
```

## Installed skills

- `project-intent` — project-specific mandatory material-change gate.
- `grill-me` — user-invoked interview wrapper.
- `grilling` — reusable design-tree interview discipline.
- `grill-with-docs` — grilling plus domain model/ADR capture.
- `domain-modeling` — shared vocabulary and ADR discipline.
- `to-spec` — locks the aligned conversation into a spec.
- `codebase-design` — deep-module/interface/seam vocabulary.
- `tdd` — behavior-first implementation loop.
- `implement` — implementation workflow.
- `code-review` — separate Standards and Spec review axes.

## Local issue tracker default

For portability, this starter uses local specs in `docs/specs/` by default.

If a cloned project wants GitHub/GitLab/Linear/etc. as its issue tracker, replace `docs/agents/issue-tracker.md` and adapt the `to-spec` publishing step.

## Important project rule

The skills must not make the agent ask the user for facts it can inspect itself. Research facts first; ask the user only for decisions, preferences, or missing standards.

For design work, this combines with Impeccable. For implementation primitives, it combines with Bearnie.
