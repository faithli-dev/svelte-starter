# Git workflow

The repository uses feature-level atomic commits as part of the definition of done.

## Definition of done

A feature or independently reviewable vertical slice is complete only when:

1. its intended behavior is implemented;
2. relevant validation has run or any validation limitation is recorded;
3. the diff has been reviewed for accidental/unrelated changes;
4. the slice has been committed to Git.

## Commit boundary

Prefer one completed feature/slice per commit.

Good:

```text
feat: add login form validation
feat: add password reset request flow
fix: preserve return URL after auth
```

Avoid:

```text
feat: finish auth stuff
```

when that commit actually contains multiple independently reviewable features.

## Safety

- Stage intentionally.
- Preserve unrelated user changes.
- Do not rewrite existing history without explicit instruction.
- Commit does not imply push.
- Push only when the active workflow requires it.
