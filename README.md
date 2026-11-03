# GoNextMarket

Corporate website for **GoNextMarket**, a company that runs field operations for market-research studies: survey programming, field QA, technical support for interviewers and periodic SPSS deliveries.

**Live site:** https://go-next-market.vercel.app

## Tech stack

- [React 18](https://react.dev/) with [React Router 6](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) for development and production builds
- [Tailwind CSS](https://tailwindcss.com/) + PostCSS / Autoprefixer
- [Formspree](https://formspree.io/) for the contact form (no backend needed)
- Deployed on [Vercel](https://vercel.com/)

## Project structure

```
src/
├─ components/
│  ├─ Navbar.jsx        # Top navigation
│  ├─ ServiceCard.jsx   # Reusable card for each service
│  ├─ ContactForm.jsx   # Form posting to Formspree
│  └─ Footer.jsx
├─ pages/
│  └─ Home.jsx          # Landing page: services grid + contact
├─ App.jsx              # Router + layout
└─ main.jsx             # Entry point
```

Services are declared as data in `Home.jsx` and rendered through `ServiceCard`, so adding a new service is a one-line change.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```
