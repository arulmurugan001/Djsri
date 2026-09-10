# DJ Sri React Website

React + Vite conversion of the supplied DJ Sri single-page website.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Place the original media in `public/images`, `public/audio`, and `public/videos` using the paths already referenced by the components.

## Component structure

All page sections are separated inside `src/components`:

- `Header.jsx`
- `Hero.jsx`
- `About.jsx`
- `Music.jsx`
- `Videos.jsx`
- `Gallery.jsx`
- `Services.jsx`
- `WhyChooseUs.jsx`
- `CallToAction.jsx`
- `InstagramReels.jsx`
- `Reviews.jsx`
- `Contact.jsx`
- `Footer.jsx`

Each JSX component imports its matching CSS file from the same folder. Shared variables, resets, reusable section styles, animations, and responsive rules are in `src/global.css`.

`src/App.jsx` only imports and arranges the components. The root `index.html` contains only metadata and the React mount element.
