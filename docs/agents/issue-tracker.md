# Issue tracker

Default: local Markdown specs.

## Create

Write one file per approved piece of work under:

```text
docs/specs/<slug>.md
```

Use frontmatter:

```yaml
---
status: ready-for-agent
---
```

## Fetch

Read the matching file under `docs/specs/`.

## Update

Edit the same file. Do not silently change approved scope; record material scope changes explicitly.

## PR request surface

Off by default.

A cloned project may replace this document with GitHub/GitLab/Linear/Jira rules later.
