# Deepening

Classify dependencies before moving a seam.

1. **In-process**: merge and test through the new interface directly.
2. **Local-substitutable**: use a local stand-in such as an in-memory implementation.
3. **Remote but owned**: define a port at the seam; production and test use separate adapters.
4. **True external**: inject the external dependency as a port; tests use a mock adapter.

## Seam discipline

- One adapter means a hypothetical seam. Two adapters means a real one.
- Internal seams may exist without becoming part of the public interface.

## Testing strategy

Replace shallow-module tests with tests through the deepened module interface. Tests assert observable outcomes and should survive internal refactors.
