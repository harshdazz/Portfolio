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

**Component structure** — section components in `src/app/components/`. Each section imports from the relevant data file in `utils/Data/`.

**UI primitives** — shadcn/ui components in `src/components/ui/`. Helper components (`GlowCard`, `AnimationLottie`) in `src/app/components/helper/`.

---

## Stack

- Next.js 15, React 18, TypeScript
- Tailwind CSS, shadcn/ui
- GSAP + ScrollTrigger (`SectionReveal` scroll-reveal animations)
- Lottie (`AnimationLottie` helper) for section illustrations
- EmailJS (client-side contact form, no backend)
- PWA via `@ducanh2912/next-pwa` (configured in `next.config.ts`)
- No backend — fully static, no API routes. `utils/check-email.ts` is a client-side email format validator.

**Contact form variants** — `src/app/components/contact/index.tsx` uses Google reCAPTCHA v3. `contact-without-captcha.tsx` is an alternate version without it.

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
