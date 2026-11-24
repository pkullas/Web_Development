# IPL Ticket Hub React App

This Vite project rebuilds part of the IPL ticket booking site with reusable React components.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. To create a production build, run `npm run build`.

## Component structure

- `src/components/Navbar.jsx` renders the site navigation.
- `src/components/Hero.jsx` renders the introduction and matchday calls to action.
- `src/components/MatchCard.jsx` displays one fixture using match data passed through props.
- `src/App.jsx` stores match data, filters it with React state, and renders cards by mapping the filtered list.
