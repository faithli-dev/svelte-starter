# Good and Bad Tests

## Good Tests

- Test behavior users/callers care about.
- Use public interfaces only.
- Survive internal refactors.
- Describe WHAT, not HOW.
- Use expected values from an independent source of truth.

## Bad Tests

Avoid tests that:
- mock internal collaborators;
- test private methods;
- assert call counts/order when behavior is what matters;
- bypass the public interface to verify state;
- recompute the expected value using the same algorithm as the implementation.
