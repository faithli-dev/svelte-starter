---
name: codebase-design
description: Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary.
---

# Codebase Design

Design **deep modules**: a lot of behaviour behind a small interface, placed at a clean seam, testable through that interface. The aim is leverage for callers, locality for maintainers, and testability for everyone.

## Glossary

**Module**: anything with an interface and an implementation.

**Interface**: everything a caller must know to use the module correctly: type signature, invariants, ordering constraints, error modes, required configuration, and performance characteristics.

**Implementation**: what's inside a module.

**Depth**: leverage at the interface. A module is deep when a large amount of behaviour sits behind a small interface.

**Seam**: a place where you can alter behaviour without editing in that place; the location at which a module's interface lives.

**Adapter**: a concrete thing that satisfies an interface at a seam.

**Leverage**: more capability per unit of interface a caller learns.

**Locality**: change, bugs, knowledge, and verification concentrate in one place rather than spreading across callers.

## Principles

- Depth is a property of the interface, not the implementation.
- The deletion test: if deleting the module makes complexity reappear across callers, the module was earning its keep.
- The interface is the test surface.
- One adapter means a hypothetical seam. Two adapters means a real one.
- Accept dependencies instead of creating them internally.
- Return results instead of hiding important outcomes behind side effects.
- Prefer small surface area.

## Going deeper

- See [DEEPENING.md](DEEPENING.md).
- See [DESIGN-IT-TWICE.md](DESIGN-IT-TWICE.md).
