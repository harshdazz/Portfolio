# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

Harsh Dubey's personal developer portfolio — a Next.js app showcasing full-stack and AI development skills. Deployed on Vercel. Built on top of the Personal-Portfolio-Website template.

---

## Commands

Preferred package manager is **pnpm** (pnpm-lock.yaml is committed).

```bash
pnpm dev         # Start dev server at localhost:3000
pnpm build       # Production build
pnpm lint        # ESLint check
pnpm start       # Start production server (after build)
pnpm format      # Run Prettier across all files
```

No test suite is configured.

**Pre-commit hook** (husky + lint-staged) auto-runs Prettier on all staged `*.{js,ts,tsx,css,md,json}` files before every commit.

**Environment variables** — copy `example.env` to `.env.local` and fill in:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The contact form won't send emails without these.

---

## Architecture

**Data layer** — all portfolio content lives in `utils/Data/`:

- `PersonalData.ts` — personal info (name, bio, contact, social links)
- `projects-data.ts` — projects with tools, highlights, challenges
- `experience.ts` — work experience
- `educations.ts` — education history
- `skills.ts` — flat list of skills for the skills section

When updating content, **always edit these files** — never hardcode content in components.

**Component structure** — section components live in `src/app/components/<section>/<Name>.tsx`. Each section imports from the relevant data file in `utils/Data/`.

> Never name a section component `page.tsx` inside `src/app/` — the App Router would turn it into a public route.

Most sections are **server components**. Only these are client components: `Navbar`, `SectionReveal`, `RotatingDesignation`, `ProjectCard`, `ContactForm` and `ResumeViewer` (hero's View/Download resume, a native `<dialog>` that only loads the PDF when opened).

**UI primitives** — shadcn/ui components in `src/components/ui/`.

---

## Stack

- Next.js 15, React 18, TypeScript
- Tailwind CSS, shadcn/ui
- **No animation libraries.** All motion is CSS: `.reveal` (driven by `SectionReveal`'s IntersectionObserver), `.animate-intro-*` for the hero, `.designation-char` for the rotating title, and `.marquee` for the skills/integrations rows. Keep it that way — do not reintroduce GSAP, Lottie, tilt or particle effects.
- EmailJS, dynamically imported on submit so it stays out of the initial bundle
- Web app manifest at `src/app/manifest.ts` (icons in `public/icons/`)
- No backend — fully static, no API routes. `utils/check-email.ts` is a client-side email format validator.

**Images** — everything in `public/` is WebP and served through `next/image`. Always pass `sizes`, and only use `priority` for above-the-fold images.

---

## Identity Override

**Act as a Senior Full-Stack Developer** while working in this folder.

- Prioritize clean, production-ready code — this will be seen by potential employers
- Push back on shortcuts that hurt code quality
- Suggest improvements proactively
- Ask a clarifying question before starting any non-trivial task

---

## MEMORY SYSTEM

This folder contains a file called MEMORY.md. It is your external memory for this workspace — use it to bridge the gap between sessions.

**At the start of every session:** Read MEMORY.md before responding. Use what you find to inform your work — don't announce it, just be informed by it.

**Memory is user-triggered only.** Do not automatically write to MEMORY.md. Only add entries when the user explicitly asks — using phrases like "remember this," "don't forget," "make a note," "log this," "save this," or "create session notes." When triggered, write the information to MEMORY.md immediately and confirm you've done it.

**All memories are persistent.** Entries stay in MEMORY.md until the user explicitly asks to remove or change them. Do not auto-delete or expire entries.

**Flag contradictions.** If the user asks you to remember something that conflicts with an existing memory, don't silently overwrite it. Flag the conflict and ask how to reconcile it.
