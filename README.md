# PassioGo-TS

TypeScript implementation of the PassioGo API client for accessing Passio GO transit data.

## Installation

```bash
npm install
```

## Usage

This package is specifically designed to work with the University of Georgia (UGA) buses with system ID 3994.

```typescript
import * as passiogo from "./index";

async function main() {
  // Get UGA's transportation system (ID: 3994)
  const uga = await passiogo.getSystemFromID(3994);

  // Get all active routes
  const routes = await uga.getRoutes();
  console.log("Active Routes:");
  for (const route of routes) {
    console.log(`- ${route.name} (${route.shortName})`);
  }

  // Similarly, you can get stops, alerts, and vehicles
}

main();
```

## Running the Example

```bash
npm run build
npm run start
```

This will compile the TypeScript code and run the UGA buses example, which shows:

- Active routes
- Bus stops
- Current system alerts
- Active vehicles

## API Documentation

The API provides access to:

- Transportation systems
- Routes
- Stops
- System alerts
- Vehicles

This TypeScript implementation is a direct port of the Python PassioGo package.

## License

MIT
