---
name: implement
description: "Implement a piece of work based on a spec or set of tickets."
disable-model-invocation: true
---

Implement the work described by the approved spec or tickets.

Use /tdd where useful, at pre-agreed seams.

Work in independently reviewable vertical slices. Do not let multiple completed features pile up uncommitted.

For each completed feature or slice:

1. run the relevant validation;
2. review the diff against the approved spec;
3. stage only files belonging to that slice;
4. create a Git commit immediately;
5. only then start the next independent slice.

Run typechecking regularly and the full relevant validation suite once at the end.

Once done, use /code-review so Standards and Spec are checked separately.

Do not silently widen scope beyond the approved spec.

Do not squash multiple completed features into one commit unless the user explicitly requests that history shape.
