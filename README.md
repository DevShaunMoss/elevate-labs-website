# Elevate Labs

A responsive website for Elevate Labs, a student developer brand offering websites, web apps, and digital solutions. The site uses the supplied flyers as design references and presents a fictional Northfield Architecture interface as a clearly labeled design demonstration.

## Run locally

Use Node.js 22.12 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

The build command runs the TypeScript project check and creates the static production site in `dist/`.

## Contact behaviour

The enquiry form validates the required fields in the browser and prepares a WhatsApp message to the first listed number. It does not submit to a server or claim the message has been sent. If a browser blocks the new tab, the completed WhatsApp draft remains available as a link. Both phone numbers have separate direct call and WhatsApp links.

## Portfolio content

The work section uses the KlassMate, P Motors, and Agron AI screenshots found in the existing developer portfolio project. Agron AI is identified as a concept/prototype. No client testimonials, awards, results, or experience claims are included.

## Deployment

The project folder did not contain an existing hosting configuration. `npm run build` creates a static Vite site in `dist/`, which can be connected to a static host when a deployment target is selected. No deployment was performed.
