# ink-thunk

A thunk implementation to use [ink](https://term.ink/) from [ts-node](https://typestrong.org/ts-node/).

## Installation

```bash
npm install ink-thunk ink react
```

## Usage

In cli.tsx:

```typescript
#!/usr/bin/env ts-node --compiler-options {"target":"ES2020","module":"commonjs","types":["node"],"jsx":"react-jsx"}

import { initInk, render, Text } from 'ink-thunk';

async function main() {
  await initInk();

  render(<Text>ink-thunk</Text>);
}

main();
```

## License

MIT
