---
name: tdd
description: Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests.
---

# Test-Driven Development

TDD is the red → green loop. Tests verify behavior through public interfaces, not implementation details.

Read `CONTEXT.md` if it exists so test names match the project's domain language and respect ADRs.

## What a good test is

A good test reads like a specification and survives internal refactors. See [tests.md](tests.md) and [mocking.md](mocking.md).

## Seams

A **seam** is the public boundary you test at. Test only at pre-agreed seams. Before writing tests, state the seams and confirm them with the user.

If the interface shape itself is unclear, use `codebase-design`.

## Rules

- Red before green.
- One vertical slice at a time.
- Test observable behavior, not internals.
- Expected values must come from an independent source of truth.
- Refactoring belongs after the behavior is green, not ahead of it.
