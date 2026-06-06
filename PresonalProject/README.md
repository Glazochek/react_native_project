# NomNom

A mobile calorie tracker. Log meals with a name and calorie count, set up your profile (age, weight, goal), and the app calculates your daily calorie target. Summary shows what you've eaten today against that target. History groups past meals by day. Everything stays on the device.

NomNom is the first calorie tracker that's flexible towards bad times. Summary watches live stock quotes for Apple (AAPL), Microsoft (MSFT), and NVIDIA (NVDA) — because market movements reflect the real political and economic mood. When all three are down, your daily goal gets a 20% boost automatically (2000 kcal becomes 2400 kcal). If at least one is flat or up, your goal stays normal. Rough day out there? Eat a bit more, feel a bit better.

## Technical overview

The app boots from `App.tsx`, which wraps the tree in `AppProvider` (React Context) and a React Navigation bottom-tab navigator. Three tabs — History, Summary, Settings — each render a screen from `src/features/`. Meal logging is a modal opened from Summary.

State lives in `AppProvider`: meals and profile are held in memory and synced to AsyncStorage (`nomnom_meals`, `nomnom_prof`) on every change. Screens read and write through `useAppStuff()`. Pure helpers in `src/shared/meals/` handle calorie math, meal validation, and grouping by date.

The market boost is its own modlet under `src/features/market-boost/` — `finnhub.ts` for the API call, `adjustGoal.ts` for the pure logic, and `useAdjustedGoal.ts` as the hook Summary uses. While quotes load, Summary shows a spinner. On failure it shows an error. Pull-to-refresh reloads both meals and market data.

UI comes from a small internal design system under `src/shared/design/` — primitives, tokens, StyleSheet recipes, and components like `Button`, `Input`, `CalorieRing`, and `SwipeRow`. Imports use `#shared`, `#design`, and `#features/*` path aliases.

**Stack**

- Expo 56 / React Native 0.85 / React 19 / TypeScript 6
- React Navigation (bottom tabs)
- AsyncStorage (local persistence)
- Finnhub API (AAPL, MSFT, NVDA daily percent change)
- react-native-gesture-handler (swipe-to-delete, FlatList)
- react-native-svg (calorie ring)
- Jest + React Native Testing Library
- EAS Build (Android APK in CI)

## Getting started

This project lives inside the `ReactN_M11` monorepo. Run everything from `PresonalProject/`.

### Prerequisites

- **Node.js 22.14.0** (matches CI)
- **npm** (lockfile is `package-lock.json`)
- **Expo Go** on your phone, or a simulator via Xcode / Android Studio
- **Finnhub API key** — free tier works at [finnhub.io](https://finnhub.io)

### Install

```bash
cd PresonalProject
npm ci
```

The repo has `.npmrc` with `legacy-peer-deps=true`. If `npm ci` fails, try `npm install`.

### Environment variables

Copy the example file and add your Finnhub token:

```bash
cp .env.example .env
```

| Variable                    | Purpose                                      |
| --------------------------- | -------------------------------------------- |
| `EXPO_PUBLIC_FINNHUB_TOKEN` | Finnhub API key for market quotes on Summary |

Restart the dev server after changing `.env`.

For EAS cloud builds:

| Variable     | Purpose                | Where                           |
| ------------ | ---------------------- | ------------------------------- |
| `EXPO_TOKEN` | Authenticates with EAS | Shell or GitHub Actions secrets |

### Run

```bash
npm start
```

Opens the Expo dev server. Scan the QR with Expo Go or press `i` / `a` for a simulator.

### Lint and typecheck

```bash
npm run lint
```

Runs TypeScript, ESLint, and Prettier.

### Tests

```bash
npm run test
```

Jest + React Native Testing Library. Tests are in:

- `src/shared/design/components/__tests__/` — UI component smoke tests
- `src/features/market-boost/__tests__/` — calorie goal adjustment logic

### Build

```bash
npx eas-cli build --platform android --profile preview
```

`preview` gives you an Android APK. `production` is also in `eas.json` with auto-incrementing version codes.
