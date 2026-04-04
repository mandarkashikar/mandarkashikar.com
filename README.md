# mandark.dev — Portfolio + Agentic Commerce Blog

A Next.js portfolio site with an integrated 90-day learning program: **"Decoding Agentic Commerce."**

## 🚀 Quick Start

```bash
npm install
npm run dev        # Local development at http://localhost:3000
npm run build      # Production build
```

## 📋 Project Status

**Status:** ✅ LIVE (Vercel deployment)  
**Live URL:** https://mandark-nextjs.vercel.app  
**Custom Domain:** mandark.dev (DNS configuration pending)  
**Last Updated:** 2026-04-03 22:54 GMT-4

## 🏗️ Architecture

### Tech Stack
- **Framework:** Next.js 16 (Pages Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel
- **DNS/CDN:** Cloudflare (for custom domain)

### Project Structure
```
/pages
  ├─ index.tsx              # Home page (portfolio)
  ├─ /blog
  │  ├─ index.tsx          # Blog archive (all lessons)
  │  └─ [day].tsx          # Individual lesson pages (SSG)
/public
  ├─ /data
  │  └─ agentic-commerce-lessons.json  # All 90 lessons (structured data)
vercel.json                 # Vercel deployment config
next.config.js              # Next.js config
tailwind.config.js          # Tailwind design system
```

## 📚 Content: "Decoding Agentic Commerce"

A 90-day structured learning program for product managers exploring AI-powered shopping agents.

### Current State
- **Days 1-9:** Fully written with substantive content
  - Day 1: Agentic Commerce Basics
  - Day 2: Agent vs Automation vs Chatbot
  - Day 3: LLM + Tools Architecture
  - Day 4: Memory, Context & State
  - Day 5: Human-in-the-Loop Patterns
  - Day 6: Reliability & Fallback Design
  - Day 7: Evaluation Basics (Quality Metrics)
  - Day 8: Prompting Patterns for Commerce Agents
  - Day 9: Multi-Agent Orchestration Basics

- **Days 10-90:** Placeholder structure ready for population
  - Cron job generates daily lessons at 3 PM ET
  - Lessons sent to Mandar for review before publishing
  - Upon approval, added to JSON + deployed

### Lesson Structure
Each lesson in `/public/data/agentic-commerce-lessons.json` contains:
```json
{
  "day": 1,
  "date": "2026-03-12",
  "title": "Agentic Commerce Basics",
  "readingTime": 8,
  "concept": ["bullet 1", "bullet 2", ...],
  "whyItMatters": ["reason 1", "reason 2", "reason 3"],
  "quiz": [
    {"type": "mcq", "question": "...", "options": [...], "correct": 0},
    {"type": "short-answer", "question": "..."}
  ],
  "answers": {
    "mcq": ["explanation 1", ...],
    ...other answers...
  }
}
```

## 🛠️ Key Features

### Home Page (`/`)
- **Portfolio section** — Skills, experience, projects
- **Blog CTA** — "Decoding Agentic Commerce" with link to `/blog`
- **Navigation** — Links to blog in header + mobile menu
- **Dark/Light mode** — Tailwind dark: prefix support

### Blog Index (`/blog`)
- **Lesson archive** — All 90 days listed (scrollable)
- **Loading skeleton** — Styled placeholders while data loads
- **Error handling** — Graceful error message if JSON fetch fails
- **Metadata** — Day number, title, date, reading time for each lesson

### Individual Lesson Pages (`/blog/[day]`)
- **Full lesson content** — Concepts, why it matters, quiz
- **Interactive quiz** — MCQ with radio buttons, short answers with reveal button
- **Expandable answers** — Hidden by default, click to reveal explanations
- **Navigation** — Prev/next buttons to adjacent lessons
- **SSG optimization** — All 9 pages pre-rendered at build time (instant load)
- **ISR (Incremental Static Regeneration)** — Revalidates every 1 hour

## 🚀 Deployment

### Current Setup
- **Deployed to:** Vercel (auto-deploys on push to main)
- **Build command:** `npm run build`
- **Framework:** Next.js (auto-detected)
- **Domain:** mandark-nextjs.vercel.app (working)

### Custom Domain Setup (mandark.dev)
**Status:** Domain added to Vercel, DNS configuration pending

**To complete DNS configuration:**
1. Go to Cloudflare dashboard (or your DNS provider)
2. Update A record for `mandark.dev`:
   - **Type:** A
   - **Name:** mandark.dev
   - **Content:** `76.76.21.21` (Vercel IP)
   - **Proxy status:** DNS only (gray cloud)
3. Or use CNAME:
   - **Name:** www
   - **Content:** mandark-nextjs.vercel.app

**Expected:** DNS propagation takes 5-15 minutes

### GitHub → Vercel Flow
1. Commit changes to GitHub (`mandarkashikar/mandarkashikar.com`)
2. Push to `main` branch
3. Vercel auto-deploys (no manual steps needed)
4. Live at https://mandark-nextjs.vercel.app (and mandark.dev once DNS is configured)

## 📅 Daily Workflow (Lessons 10-90)

### Cron Job Details
- **Schedule:** Daily at 3 PM ET
- **Location:** OpenClaw gateway cron (job ID: `84ba334b-044c-4c4f-bd28-f4e3ba32d4e0`)
- **Action:** Generate day N/90 lesson content

### Process
1. **Generate draft** — AI generates lesson (concept, why it matters, quiz, answers)
2. **Send for review** — Draft message sent to Mandar (Telegram: 8210290200)
3. **Await approval** — Mandar reacts ✅ (approve) or ❌ (edit)
4. **Update JSON** — On approval, lesson added to `/public/data/agentic-commerce-lessons.json`
5. **Deploy** — `git push` triggers Vercel rebuild
6. **Live** — New lesson appears on `/blog` and `/blog/[day]`

## 🔧 Development Notes

### Adding a New Lesson (Manual)
1. Edit `/public/data/agentic-commerce-lessons.json`
2. Add new entry to `lessons[]` array with full content
3. `git push` to main
4. Vercel rebuilds and deploys (SSG regenerates `[day].tsx` pages)
5. Check https://mandark-nextjs.vercel.app/blog/[day-number]

### Styling & Design
- **Font:** Inter (via next/font)
- **Colors:** Tailwind default + dark mode support
- **Spacing:** Tailwind space/gap utilities
- **Responsive:** Mobile-first (hidden nav on mobile, hamburger menu via MK logo button)

### Performance Metrics
- **Build time:** ~2 seconds (Turbopack)
- **Page load:** <500ms (SSG pre-rendered)
- **Bundle size:** Minimal (Next.js auto-optimizes)

## ⚠️ Known Issues & Fixes Applied

### Issue: Old HTML Files Served (Resolved ✅)
- **Problem:** Cloudflare Pages served old vanilla HTML instead of Next.js
- **Solution:** Removed old files (`index.html`, `style.css`, etc.) from repo, switched to Vercel

### Issue: SSG Build Errors (Resolved ✅)
- **Problem:** `lesson` undefined in getStaticProps during build
- **Solution:** Added null checks and fallback loading state in `[day].tsx`

### Issue: Cloudflare → Vercel Migration (Completed ✅)
- **Problem:** Cloudflare had mixed HTML/Next.js files, causing confusion
- **Solution:** Full cutover to Vercel (cleaner, native Next.js support)

## 🔐 Environment & Secrets

**Vercel token:** Already authenticated on Mac mini (via CLI)  
**GitHub:** Connected (auto-deploy on push)  
**No API keys needed:** This site is fully static (no external APIs)

## 📞 For Future Developers

### If You're Taking Over:
1. **Understand the architecture:** It's Pages Router + SSG (not App Router)
2. **Deploy flow:** Push to GitHub → Vercel auto-deploys (no manual steps)
3. **Adding lessons:** Edit JSON file, push, done
4. **Custom domain:** mandark.dev DNS points to Vercel (A record or CNAME)
5. **Questions?** Check this README first, then ask Mandar

### Common Tasks:
- **Edit home page:** `/pages/index.tsx`
- **Edit blog listing:** `/pages/blog/index.tsx`
- **Edit lesson template:** `/pages/blog/[day].tsx`
- **Add/edit lessons:** `/public/data/agentic-commerce-lessons.json`
- **Change styles:** `tailwind.config.js` or inline `className="..."`

## 📝 Recent Changes (Log)

| Date | Change | Status |
|------|--------|--------|
| 2026-04-03 22:54 | Deployed to Vercel | ✅ Live |
| 2026-04-03 22:51 | Added Vercel config | ✅ Pushed |
| 2026-04-03 21:36 | Fixed SSG build, added home page + nav | ✅ Merged |
| 2026-04-03 21:09 | Added loading skeletons + error handling | ✅ Merged |
| 2026-04-03 12:16 | Next.js refactor complete, blog infrastructure built | ✅ Merged |

---

**Last reviewed:** 2026-04-03 22:54 GMT-4  
**Maintained by:** Babu (OpenClaw assistant)  
**For:** Mandar Kashikar (mandaropenclaw@gmail.com)
