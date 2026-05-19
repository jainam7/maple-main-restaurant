# Maple & Main Restaurant

Maple & Main is a modern restaurant website for an artisanal dining concept. The app presents a polished landing experience with animated hero content, featured menu items, interactive menu filtering, guest testimonials, and a reservation form backed by a small Express API.

## Features

- Responsive React single-page app built with Vite
- Animated hero, navigation, menu, contact, and reservation sections
- Interactive menu tabs for breakfast, lunch, dinner, and drinks
- Reservation form that posts to `/api/reserve`
- Express server for local development and production serving
- Tailwind CSS styling with Motion animations and Lucide icons

## Tech Stack

- React 19
- TypeScript
- Vite
- Express
- Tailwind CSS
- Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app runs at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the Express server with Vite middleware for local development.

```bash
npm run build
```

Builds the Vite frontend and bundles the Express server into `dist/server.cjs`.

```bash
npm start
```

Runs the production server from the built `dist` output.

```bash
npm run preview
```

Runs Vite preview for the frontend build.

```bash
npm run lint
```

Runs TypeScript checks with `tsc --noEmit`.

```bash
npm run clean
```

Removes generated build output.

## Reservation API

The app includes one API route:

```text
POST /api/reserve
```

Expected request fields:

- `name`
- `email`
- `date`
- `time`
- `guests`
- `special`

The current server logs the reservation and returns a success response. In a production app, this route can be extended to store reservations or send confirmation emails.

## Restaurant Address

```text
118 Yorkville Ave
Toronto, ON M5R 1C2
```

## Project Structure

```text
src/
  components/
    About.tsx
    BentoGrid.tsx
    CustomCursor.tsx
    Hero.tsx
    InteractiveMenu.tsx
    MagneticButton.tsx
    Navbar.tsx
  App.tsx
  index.css
  main.tsx
server.ts
vite.config.ts
```
