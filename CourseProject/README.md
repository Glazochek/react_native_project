# StockPulse

A mobile app for tracking stocks. You get live quotes, can filter to only stocks that are up, star favorites, and load more by scrolling. Favorites auto-refresh every 1.5 seconds. There's also a blog tab that pulls market news from Finnhub and opens articles in the browser. Tap any stock to see the full quote — current price, open, high, low, and previous close.

## Technical overview

Routing is file-based with expo-router. Files in `src/app/` just import and render screens from `src/features/`. There's a bottom tab bar (Markets, Favorites, Blog) and a nested stack under Markets for the detail page at `/markets/[symbol]`.

Each screen manages its own state. Favorites are saved to AsyncStorage under `fav_stocks` and read separately by Markets and Favorites. Stock and news data comes from Finnhub via `fetch()` in `src/shared/stocks/index.ts`. Markets loads 12 symbols on start and adds 4 more per scroll, pulling from a pool of 22. UI components come from `#design` — tokens, primitives, and things like `Button`, `Card`, and `SwipeRow`.

**Stack**

- Expo 56 / React Native 0.85 / React 19 / TypeScript 6
- expo-router (file-based routing, typed routes)
- Finnhub API (quotes, profiles, market news)
- AsyncStorage (favorites)
- react-native-reanimated + gesture-handler (swipe-to-remove on Favorites)
- Jest + React Native Testing Library
- knip (dead-code checks in CI)
- EAS Build (Android APK in CI)

## Getting started

This project is inside the `ReactN_M11` monorepo. Run everything from `CourseProject/`.

### Prerequisites

- **Node.js 22.14.0** (matches CI)
- **npm** (lockfile is `package-lock.json`)
- **Expo Go** on your phone, or a simulator via Xcode / Android Studio
- A **Finnhub API key** — free tier is fine at [finnhub.io](https://finnhub.io)

### Install

```bash
cd CourseProject
npm ci
```

The repo has `.npmrc` with `legacy-peer-deps=true`. If `npm ci` fails, try `npm install`.

### API key

The token lives at the top of `src/shared/stocks/index.ts`:

```ts
const KEY = "your-finnhub-token-here";
```

Swap it for your key before running.

### Environment variables

For EAS cloud builds:

| Variable | Purpose | Where |
|----------|---------|-------|
| `EXPO_TOKEN` | Authenticates with EAS | Shell or GitHub Actions secrets |

### Run

```bash
npm start
```

Starts the Expo dev server. Scan the QR with Expo Go or press `i` / `a` for a simulator.

### Lint and typecheck

```bash
npm run lint
```

Runs TypeScript, ESLint, Prettier, and knip.

### Tests

```bash
npm run test
```

Jest + React Native Testing Library. Tests are in `src/shared/design/components/__tests__/`.

### Build

```bash
npx eas-cli build --platform android --profile preview
```

`preview` gives you an Android APK. `production` is also in `eas.json` with auto-incrementing version codes.