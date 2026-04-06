# mandark.dev — Project Handoff Documentation

**Last Updated:** 2026-04-06  
**Status:** ✅ Production Live  
**Live URLs:**
- Main site: https://mandark.dev
- Blog: https://mandark.dev/blog
- GitHub: https://github.com/mandarkashikar/mandarkashikar.com

---

## 🎯 Project Overview

**mandark.dev** is Mandar Kashikar's portfolio and learning platform, featuring:
1. **Professional portfolio** — experience, projects, skills
2. **90-day agentic commerce curriculum** — interactive blog with daily lessons
3. **Fully automated lesson pipeline** — cron job generates + sends for approval daily

### Key Features
- ✅ Dark/light mode toggle
- ✅ Mobile-responsive design
- ✅ Experience modal with STAR achievements
- ✅ Interactive quiz system with expandable answers
- ✅ Daily cron job for curriculum delivery
- ✅ GitHub-connected auto-deployment to Vercel

---

## 🏗️ Technology Stack

| Component | Technology | Notes |
|-----------|-----------|-------|
| **Framework** | Next.js 16 (Pages Router) | Not App Router |
| **Styling** | Tailwind CSS 4 + dark mode | `dark:` prefix support |
| **Language** | TypeScript | Strict mode enabled |
| **Deployment** | Vercel | Auto-deploys on `main` push |
| **DNS/Custom Domain** | Cloudflare | CNAME pointing to mandark-nextjs.vercel.app |
| **CMS** | JSON file (`agentic-commerce-lessons.json`) | Static data, no database |

### Build & Runtime
- **Build tool:** Next.js Turbopack (2s compile time)
- **Node version:** v24.14.0+
- **Package manager:** npm
- **Environment:** No env vars needed (fully static)

---

## 📁 Project Structure

```
mandark.dev/
├── pages/
│   ├── index.tsx                 # Home/portfolio page
│   ├── _app.tsx                  # Global CSS import (Tailwind)
│   └── blog/
│       ├── index.tsx             # Blog archive (lists all lessons)
│       └── [day].tsx             # Individual lesson pages (SSG)
│
├── public/
│   ├── profile.jpg               # Mandar's headshot (108KB)
│   └── data/
│       └── agentic-commerce-lessons.json  # All 90 lessons (structured)
│
├── styles/
│   └── globals.css               # Tailwind import only
│
├── next.config.js                # Next.js config
├── tailwind.config.js            # Tailwind design tokens
├── tsconfig.json                 # TypeScript config
├── vercel.json                   # Vercel deployment config
├── README.md                      # Comprehensive guide
├── PROJECT_STATUS.md             # Status checklist
└── PROJECT_HANDOFF.md            # This file
```

---

## 🎨 Key Pages & Components

### 1. Home Page (`pages/index.tsx`)

**Purpose:** Portfolio + hero + experience modal

**Key Sections:**
- **Header:** Logo (MK), nav links, icons (email, LinkedIn, GitHub), dark/light toggle
- **Mobile menu:** Hidden by default, tap MK logo to toggle (dot indicator shows state)
- **Hero:** Profile photo, name, title, bio, Resume + Contact buttons
- **Skills:** Pills with 9 core competencies
- **Experience:** 5 clickable cards (Elavon, Talech, TriNet, EY, MPOWER)
  - Click card → modal opens with achievements + key projects (STAR format)
  - Modal has close button (✕) and scrollable content
- **Projects:** 4 cards (Lenny's Office Hours, Buyer Agent, Studio Ocea, Decoding AC)
  - Status badges (Build Challenge, In Progress, Live, Active)
  - Tags + external/internal links
- **Blog CTA:** Calls out the 90-day curriculum
- **Footer:** Copyright + attribution

**State Management:**
- `selectedExp` — which experience card is open
- `mobileMenuOpen` — mobile menu toggle
- `isDark` — theme state (persisted to localStorage)

**Critical Details:**
- Contact email: `mandarkashikar1@gmail.com` (changed from mandaropenclaw@)
- Resume link: Google Drive (external)
- Experience data hardcoded (not in JSON)
- Dark mode uses Tailwind `dark:` prefix + `<html class="dark">`

### 2. Blog Index (`pages/blog/index.tsx`)

**Purpose:** Archive listing all 90 lessons

**Features:**
- Fetches `agentic-commerce-lessons.json` client-side
- Shows loading skeleton while loading
- Lists all days with: day#, title, date, reading time
- Links to individual lesson pages
- "Showing X of 90 lessons" footer

**Data fetching:**
- `fetch()` in `useEffect()`
- JSON stored at `/public/data/agentic-commerce-lessons.json`

### 3. Individual Lesson (`pages/blog/[day].tsx`)

**Purpose:** Single lesson with concepts, quiz, answers

**Features:**
- **SSG (Static Site Generation):** Pre-renders all days at build time
- **ISR (Incremental Static Regeneration):** Revalidates every 1 hour
- **Page structure:**
  - Day counter (Day X of 90)
  - Large title + reading time
  - **Concepts:** Numbered bullet list
  - **Why it matters:** 3 highlighted reasons
  - **Quiz:** 5 questions (3 MCQ + 2 short answer)
    - MCQ: radio buttons, 1 correct answer
    - Short answer: hidden by default, reveal on button click
  - **Answers:** Numbered explanations
  - **Navigation:** Prev/Next buttons to adjacent lessons

**Critical Logic:**
```typescript
export async function getStaticPaths() {
  // Generate paths for days 1-90
  // Must match lesson.day values in JSON
}

export async function getStaticProps({ params }) {
  // Fetch lesson by day number
  // If not found, return notFound: true
}
```

---

## 📊 Content Structure: Agentic Commerce Lessons

### JSON Schema

**File:** `/public/data/agentic-commerce-lessons.json`

```json
{
  "title": "Decoding Agentic Commerce",
  "description": "...",
  "startDate": "2026-03-12",
  "lessons": [
    {
      "day": 1,
      "date": "2026-03-12",
      "title": "Agentic Commerce Basics",
      "readingTime": 8,
      "concept": ["bullet 1", "bullet 2", ...],
      "whyItMatters": ["reason 1", "reason 2", "reason 3"],
      "quiz": [
        {
          "type": "mcq",
          "question": "...",
          "options": ["A", "B", "C", "D"],
          "correct": 0
        },
        {
          "type": "short-answer",
          "question": "..."
        }
      ],
      "answers": {
        "mcq": ["explanation 1", "explanation 2", ...],
        "short-answer": ["answer 1", "answer 2"]
      }
    }
  ]
}
```

### Current State (Apr 6, 2026)
- **Days 1-9:** Fully written with substantive content
- **Days 10-25:** Structured with placeholder content (ready for cron to fill in)
- **Days 26-90:** Will be generated daily by cron job

### Curriculum Outline (Days 1-90)
| Days | Topic |
|------|-------|
| 1-10 | Foundations (basics, architecture, design patterns) |
| 11-20 | Shopper journey (discovery → checkout) |
| 21-30 | Merchant operations (catalog, inventory, support) |
| 31-40 | Payments & trust (security, compliance) |
| 41-50 | Data & integration (APIs, events, observability) |
| 51-60 | Compliance & governance (privacy, risk, audit) |
| 61-70 | Economics & strategy (unit econ, partnerships) |
| 71-80 | PM execution (prioritization, rollout, storytelling) |
| 81-90 | Advanced topics & capstone |

---

## 🤖 Daily Cron Job Pipeline

### Cron Configuration

**Job ID:** `84ba334b-044c-4c4f-bd28-f4e3ba32d4e0`

**Schedule:** Daily at 3 PM ET (`0 15 * * *` America/New_York)

**Payload Type:** `agentTurn` (isolated session)

**Timeout:** 180 seconds

**Delivery:** Telegram to Mandar (8210290200)

### Workflow

1. **Generate** (15:00 ET)
   - Agent reads curriculum syllabus
   - Generates Day N/90 content (concept, why it matters, quiz, answers)
   - Formats as clean Telegram message

2. **Send for Review** (15:00 ET)
   - Posts to Mandar's Telegram DM (user 8210290200)
   - Formatted with: `**[REVIEW] Day X/90: [Title]**` header
   - Full lesson content + quiz included

3. **Await Approval**
   - Mandar reacts ✅ (approve) → auto-posts
   - Mandar reacts ❌ (edit) → waits for revision

4. **On Approval** (auto)
   - Lesson added to `/public/data/agentic-commerce-lessons.json`
   - Git commit: `git add ... && git commit -m "lesson: add day X"`
   - Git push to main
   - Vercel auto-deploys (5-30s)
   - Live at `/blog/X`

### Important Notes
- **No manual intervention needed** for approval workflow
- **Curriculum is deterministic** — Day N always teaches the same topic (see outline above)
- **If cron fails:** Check Telegram for delivery status, check gateway logs for timeout/errors
- **If lesson needs editing:** Mandar edits JSON manually or cron regenerates on command

---

## 🚀 Deployment & Hosting

### Vercel Setup
- **Project:** `mandark-nextjs` (mandarkashikars-projects)
- **Auto-deploy:** Enabled on `main` branch push
- **Build command:** `npm run build`
- **Output directory:** `.next` (auto-detected)
- **Framework:** Next.js (auto-detected)
- **Build time:** ~10-15 seconds
- **Deploy time:** ~20-30 seconds

### Custom Domain (mandark.dev)
- **Current setup:** Cloudflare DNS with CNAME
- **CNAME value:** `mandark-nextjs.vercel.app`
- **TTL:** 3600
- **Cloudflare API token:** Available at `~/.openclaw/cloudflare-api-token` (do not commit)

### GitHub Setup
- **Repository:** `mandarkashikar/mandarkashikar.com`
- **Branch:** `main` (production)
- **Remote URL:** HTTPS (no credentials in URL — PAT handled by osxkeychain)
- **GitHub PAT:** Stored in osxkeychain (not in `.env` or committed files)

---

## 🔧 Common Tasks

### Adding a New Lesson (Manual)
```bash
# Edit the JSON
vi public/data/agentic-commerce-lessons.json

# Add new lesson object to lessons[] array
# Must include: day, date, title, readingTime, concept, whyItMatters, quiz, answers

# Commit & push
git add public/data/agentic-commerce-lessons.json
git commit -m "lesson: add day X - [Title]"
git push origin main

# Vercel auto-deploys
# Check live at https://mandark.dev/blog/X
```

### Updating Home Page Content
```bash
# Edit experience, projects, or hero text
vi pages/index.tsx

# Make changes (experience data, project list, skills, etc.)
# Commit & push
git add pages/index.tsx
git commit -m "feat: update [section]"
git push origin main

# Vercel auto-deploys in 20-30s
```

### Updating Tailwind Styles
```bash
# Edit design tokens or add new styles
vi tailwind.config.js

# Or add inline Tailwind classes in TSX files
# No build step needed — Tailwind is compiled at build time

git add tailwind.config.js
git commit -m "style: update design tokens"
git push origin main
```

### Testing Locally
```bash
npm install
npm run dev

# Opens http://localhost:3000
# Hot reload enabled — edit files and refresh browser

# Build + test production:
npm run build
npm start
```

### Checking Cron Status
```bash
# List all cron jobs (requires gateway access)
openclaw cron list

# Check job 84ba334b-044c-4c4f-bd28-f4e3ba32d4e0 runs
openclaw cron list | grep "84ba334b"

# View recent runs & status
openclaw cron runs --jobId 84ba334b-044c-4c4f-bd28-f4e3ba32d4e0
```

---

## ⚠️ Known Limitations & Gotchas

### Pages Router (Not App Router)
- Uses `/pages` directory structure
- `getStaticProps` for SSG (not `generateStaticParams`)
- `_app.tsx` is required for global CSS
- Dynamic routes use `[param].tsx` syntax

### Tailwind 4 + Next.js
- Requires `_app.tsx` with CSS import
- No PostCSS config needed (handled automatically)
- Dark mode uses `dark:` prefix + `<html class="dark">`
- Build time: ~2s (Turbopack)

### JSON Lessons File
- **Single source of truth:** Must match blog page renders
- **No validation at build time:** Bad JSON will break the page silently
- **Maximum size:** Currently 45KB (manageable for 90 lessons)
- **Manual edits:** Must maintain exact schema or SSG will fail

### Vercel Deployment
- **Cold start:** First deploy after 24h inactivity takes 30-45s
- **Redeployment:** Pushing to main redeploys entire site (no selective deploy)
- **Preview deployments:** Pull requests auto-deploy to unique URLs
- **Logs:** Available at https://vercel.com/mandarkashikars-projects

### Mobile Menu
- Only visible on `md` breakpoint and below
- Tap "MK" logo to toggle (not a hamburger icon)
- Dot indicator shows open/closed state
- Closes on link click (auto-handled)

---

## 📋 Checklist for Handoff

- [x] README.md written (comprehensive architecture guide)
- [x] PROJECT_STATUS.md written (status + next steps)
- [x] This file (PROJECT_HANDOFF.md) for AI agents
- [x] Code is clean, typed (TypeScript strict mode)
- [x] All 9 lessons fully written + days 10-25 structured
- [x] Cron job configured and tested
- [x] Vercel deployment working
- [x] Custom domain (mandark.dev) pointing correctly
- [x] No secrets in repository (.env, keys, tokens excluded)
- [x] Mobile responsive and dark/light mode working
- [x] Experience modal fully functional with STAR format

---

## 🎓 For the Next Developer

### Before You Start:
1. **Read this file** — you're here
2. **Read README.md** — architecture & detailed setup
3. **Read PROJECT_STATUS.md** — current status & blockers
4. **Clone the repo:** `git clone https://github.com/mandarkashikar/mandarkashikar.com.git`
5. **Install:** `npm install`
6. **Test locally:** `npm run dev`

### Common Scenarios:

**"I need to add Day 26-90 content"**
- Cron job handles this automatically at 3 PM ET daily
- Lesson generates, sends to Mandar for approval
- On approval, updates JSON + deploys

**"A lesson has an error"**
- Edit `/public/data/agentic-commerce-lessons.json` directly
- Verify JSON syntax (use an IDE or JSON linter)
- Commit + push
- Vercel redeploys in 20-30s

**"I need to change the home page design"**
- Edit `pages/index.tsx` (React component)
- Update `tailwind.config.js` for design tokens
- Test locally with `npm run dev`
- Push to main

**"The blog isn't showing lessons"**
- Check `/public/data/agentic-commerce-lessons.json` exists
- Verify JSON is valid (not corrupted)
- Check browser console for errors
- Verify lesson.day matches SSG paths (days 1-90)

**"Vercel deployment failed"**
- Check build logs at https://vercel.com/mandarkashikars-projects
- Common issues: bad JSON, missing dependencies, build errors
- Fix locally (`npm run build`), commit, push

---

## 📞 Contact & Support

**Project Owner:** Mandar Kashikar  
**Email:** mandarkashikar1@gmail.com  
**GitHub:** @mandarkashikar  

**For technical issues:**
- Check GitHub Issues
- Review Vercel logs
- Check OpenClaw gateway logs (if cron fails)

---

## 🔐 Security Notes

### What's NOT in the repo:
- `.env` files (no environment variables needed)
- GitHub PAT (stored in osxkeychain, not in URL)
- Cloudflare API token (stored locally, not committed)
- AWS keys, database credentials, etc.

### Safe to commit:
- TypeScript code
- JSON data (lessons, non-sensitive content)
- Configuration files (next.config.js, tailwind.config.js)
- Tailwind CSS classes
- Component React code

### Git safety:
- `.gitignore` excludes `.env*`, `*.key`, `*.pem`, `node_modules/`
- Use `git secrets` or pre-commit hooks to prevent accidental commits

---

**Last updated:** 2026-04-06 by Babu  
**Next review:** When next major feature is added
