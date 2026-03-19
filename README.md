# Harsh Dubey — AI Full Stack Developer Portfolio

A modern, fully responsive developer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS** — designed to showcase my work as an AI-powered Full Stack Developer. Features smooth GSAP animations, a dual-marquee tech stack & integrations showcase, and a live contact form.

---

## 🌐 Live Demo

**[portfolio-kbqt.vercel.app](https://portfolio-kbqt.vercel.app/)**

---

## ✨ Sections

| Section          | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| **Hero**         | Animated intro with rotating designation titles                      |
| **About**        | Bio, stats, and profile with scroll-triggered animations             |
| **Experience**   | Work history with timeline layout                                    |
| **Tech Stack**   | Scrolling marquee of all technologies with brand icons               |
| **Integrations** | AI & automation tool integrations (Slack, n8n, Claude, Zapier, etc.) |
| **Projects**     | Featured project cards with live demos and repo links                |
| **Contact**      | EmailJS-powered contact form                                         |

---

## 🛠 Tech Stack

| Category         | Tools                                  |
| ---------------- | -------------------------------------- |
| **Framework**    | Next.js 15 (App Router)                |
| **Language**     | TypeScript                             |
| **Styling**      | Tailwind CSS                           |
| **Animations**   | GSAP, ScrollTrigger, SplitText, Lottie |
| **Contact**      | EmailJS (no backend required)          |
| **Icons**        | React Icons, Lucide                    |
| **Code Quality** | ESLint, Prettier, Husky + lint-staged  |
| **Deployment**   | Vercel                                 |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/harshdazz/Portfolio.git
cd Portfolio

# Install dependencies (pnpm preferred)
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Copy `example.env` to `.env.local` and fill in your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form won't send emails without these. Get them free at [emailjs.com](https://www.emailjs.com/).

---

## 📁 Project Structure

```
├── public/                  # Static assets (images, lottie, SVGs)
├── src/
│   └── app/
│       ├── components/      # All section components
│       │   ├── hero-section/
│       │   ├── about/
│       │   ├── experience/
│       │   ├── skills/
│       │   ├── integrations/
│       │   ├── projects/
│       │   └── contact/
│       └── page.tsx         # Root page
└── utils/
    └── Data/                # All content data (edit here to update portfolio)
        ├── PersonalData.ts
        ├── projects-data.ts
        ├── experience.ts
        ├── educations.ts
        ├── skills.ts
        └── integrations-data.ts
```

> All portfolio content lives in `utils/Data/` — never hardcode content in components.

---

## 📬 Contact

- **Email** — harshdazz4@gmail.com
- **GitHub** — [github.com/harshdazz](https://github.com/harshdazz)
- **LinkedIn** — [linkedin.com/in/harsh-dubey-b2b2b4395](https://www.linkedin.com/in/harsh-dubey-b2b2b4395)
