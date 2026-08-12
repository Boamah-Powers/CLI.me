# CLI.me

A terminal-style portfolio for Kwaaku Boamah-Powers, built with Next.js, TypeScript, and Tailwind CSS. The site reflects the current résumé and highlights research, software engineering, and applied ML work.

## Included Content

- Research Assistant experience in the Music and Sound Cultures (MaSC) Research Group
- Software engineering internships at Intuit and Buzz Mobility
- Computer Science degree progress at NYU Abu Dhabi
- Current skills spanning Python, C/C++, JavaScript, ML, audio processing, and data engineering
- Key project highlights and contact information

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Project structure

- `src/app/lib/profileData.ts` — source for the portfolio text and command outputs
- `src/app/lib/commands.ts` — terminal command handling
- `src/app/components/WelcomeMessage.tsx` — landing terminal greeting

## Notes

This portfolio is intentionally aligned with the current résumé in `resume.md` as the source of truth.
