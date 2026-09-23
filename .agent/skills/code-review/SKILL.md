---
name: code-review
description: Review changes along two separate axes: Standards and Spec. Use for branch/PR/work-in-progress review.
---

Review the diff between HEAD and a fixed point.

## Standards axis

Check the diff against:
- `AGENTS.md`
- `UI.md`
- relevant `DESIGN.md`, `CONTEXT.md`, ADRs, and other documented standards
- a code-smell baseline: mysterious names, duplicated code, feature envy, data clumps, primitive obsession, repeated switches, shotgun surgery, divergent change, speculative generality, message chains, middle men, and refused bequest

Repository standards override generic smell heuristics.

## Spec axis

Find the originating spec in this order:
1. explicit path supplied by the user;
2. branch-matching file under `docs/specs/`;
3. issue/spec reference from commit history;
4. ask where the spec is.

Report separately:
- missing/partial requirements;
- unrequested scope creep;
- behavior that appears to contradict the spec.

Never merge the Standards and Spec verdicts into one score. A change can pass one and fail the other.
