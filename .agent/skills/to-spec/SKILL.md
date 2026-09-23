---
name: to-spec
description: "Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed."
disable-model-invocation: true
---

This skill takes the current conversation context and codebase understanding and produces a spec. Do NOT interview the user; synthesize what is already known.

Read `docs/agents/issue-tracker.md`, `docs/agents/domain.md`, the project's `CONTEXT.md`, and relevant ADRs.

## Process

1. Explore the repo enough to understand current state.
2. Sketch the seams at which the feature will be tested. Prefer existing seams and the highest useful seam.
3. Check with the user that the seams match expectations.
4. Write the spec to the configured issue tracker. In this starter, the default tracker is local Markdown under `docs/specs/`.
5. Mark it `ready-for-agent`.

## Spec template

### Problem Statement
The problem from the user's perspective.

### Solution
The solution from the user's perspective.

### User Stories
A numbered list: As an <actor>, I want <feature>, so that <benefit>.

### Implementation Decisions
Modules/interfaces affected, technical clarifications, architectural decisions, schema/API contracts, interactions. Avoid brittle file-path-level implementation instructions.

### Testing Decisions
Testing seams, observable behavior, prior art.

### Out of Scope
Explicit exclusions.

### Further Notes
Anything else needed to preserve intent.
