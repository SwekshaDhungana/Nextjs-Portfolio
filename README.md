# Sweksha Dhungana Portfolio

This is my personal portfolio site.

I built it with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The goal was to keep it simple, personal, and easy to update as I keep building new projects.

## What is in the site

- A hero section with links to projects, GitHub, and my resume
- An About section with a short introduction and my college details
- A Projects section with selected work
- A Skills section with the tools I use most
- A Contact section with direct links and a working Formspree form

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Run it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Useful files

- `src/data/` holds most of the content shown on the site
- `src/sections/landing/` contains the page sections
- `public/Sweksha-Dhungana-Resume.pdf` is the file used by the resume download button
- `src/data/contact.ts` contains the Formspree endpoint and contact links

## Notes

- If I want to update the resume, I can replace the PDF in `public/` with the same filename
- If I want to change the text on the site, most of it can be edited from the files in `src/data/`
