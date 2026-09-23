# When to Mock

Mock at system boundaries only:

- External APIs
- Databases when a real/test database is impractical
- Time/randomness
- File system when necessary

Don't mock your own modules or internal collaborators when the behavior can be tested through the public interface.

Prefer dependency injection and specific SDK-style boundary interfaces.
