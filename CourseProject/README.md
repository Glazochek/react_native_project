# AstroWatch

Space dashboard for astronauts — ISS position, NASA DONKI space weather, crew in orbit, and astronomy picture of the day.

## Navigation

- **Root Stack** — tabs + optional About (`/temp`)
- **Tabs** — Dashboard (`/`), Crew (`/crew`), APOD (`/apod`)
- **Nested Stack** in Crew — list → `/crew/[id]`

## APIs

- [Open Notify](http://open-notify.org/) — ISS position, people in space
- [NASA DONKI & APOD](https://api.nasa.gov/) — `DEMO_KEY`

## Start

```bash
cd CourseProject
npm install
npx expo start --clear
```

Press **s** for Expo Go if needed, then scan the QR code.
