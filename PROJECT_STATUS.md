# PROJECT_STATUS.md — Decoding Agentic Commerce Blog

**Last Updated:** 2026-04-03 22:54 GMT-4  
**Owner:** Mandar Kashikar (mandaropenclaw@gmail.com)

---

## 🎯 Current Status: LIVE ✅

| Component | Status | URL | Details |
|-----------|--------|-----|---------|
| **Site** | ✅ Live | https://mandark-nextjs.vercel.app | Vercel deployment working |
| **Custom Domain** | ⏳ Pending | mandark.dev | DNS config needed (see below) |
| **Blog** | ✅ Live | /blog | 9 lessons published, archive page working |
| **Lessons 1-9** | ✅ Complete | /blog/1 through /blog/9 | All content written, quizzes interactive |
| **Lessons 10-90** | ⏳ Queued | Scheduled | Cron job waits for Mandar approval daily at 3 PM ET |

---

## 🔧 Technical Setup

### Framework & Hosting
- **Framework:** Next.js 16 (Pages Router)
- **Deployment:** Vercel (mandark-nextjs project)
- **Build:** Automatic on push to GitHub (main branch)
- **Domain:** mandark.dev (Cloudflare DNS, needs update)

### Repository
- **Repo:** https://github.com/mandarkashikar/mandarkashikar.com
- **Branch:** `main` (active)
- **Auto-deploy:** Enabled (Vercel connected)

### Credentials & Auth
- ✅ **Vercel CLI:** Authenticated on Mac mini
- ✅ **GitHub:** Connected (auto-deploy)
- ✅ **Cloudflare:** API token at `~/.openclaw/cloudflare-api-token`

---

## 📋 What's Built

### Pages
| Page | Path | Type | Status |
|------|------|------|--------|
| Home/Portfolio | `/` | Static | ✅ Live |
| Blog Archive | `/blog` | Dynamic (loads JSON) | ✅ Live |
| Lesson Pages | `/blog/[day]` | SSG (pre-rendered) | ✅ Live (days 1-9) |

### Content
- **Lessons 1-9:** All written, published, interactive quizzes working
- **Lessons 10-90:** Awaiting daily generation (cron job ready)
- **Total:** 90-day curriculum planned, 9 live

### Features
- ✅ Dark/light mode
- ✅ Loading skeletons
- ✅ Error handling (JSON fetch failures)
- ✅ Interactive MCQ + short answer quizzes
- ✅ Expandable answers
- ✅ Prev/next navigation
- ✅ Mobile responsive
- ✅ SSG optimization (instant page loads)

---

## 🚀 Next Steps for Custom Domain

**Currently:** Site lives at `mandark-nextjs.vercel.app`  
**Goal:** Site accessible at `mandark.dev`

### Action Required:
Update DNS at Cloudflare to point `mandark.dev` to Vercel:

**Option A (Recommended - A Record):**
- Go to Cloudflare DNS settings for mandark.dev
- Find or create A record for `mandark.dev`
- Change IP to: `76.76.21.21`
- Save
- **Wait:** 5-15 minutes for propagation

**Option B (CNAME):**
- Add CNAME record: `www` → `mandark-nextjs.vercel.app`
- Keep @ record as A pointing to Vercel IP

---

## 📅 Daily Lesson Workflow

### Cron Job Active
- **Schedule:** 3 PM ET, every day
- **Job ID:** `84ba334b-044c-4c4f-bd28-f4e3ba32d4e0`
- **Status:** ✅ Enabled and waiting for day 10 content

### Process Flow
1. **3:00 PM ET** — Cron triggers lesson generation
2. **Generate** — AI creates day N content (concept, quiz, answers)
3. **Send** — Draft posted to Mandar (Telegram 8210290200)
4. **Review** — Mandar reacts ✅ (approve) or ❌ (needs edit)
5. **Update JSON** — On approval, lesson added to `/public/data/agentic-commerce-lessons.json`
6. **Deploy** — GitHub push → Vercel rebuild → live at `/blog/N`

---

## ⚠️ Known Issues & Resolutions

| Issue | Root Cause | Resolution | Status |
|-------|-----------|-----------|--------|
| Old HTML served from Cloudflare | Mixed file deployment | Deleted old files, switched to Vercel | ✅ Fixed |
| SSG build errors | `lesson` undefined | Added null checks in component | ✅ Fixed |
| Pages Router vs App Router conflict | Create-next-app default | Removed `/app` directory | ✅ Fixed |

---

## 📝 File Locations & Reference

### Key Files
| File | Purpose | Location |
|------|---------|----------|
| Lesson content | 90-day curriculum | `/public/data/agentic-commerce-lessons.json` |
| Home page | Portfolio + blog CTA | `/pages/index.tsx` |
| Blog listing | Archive of all lessons | `/pages/blog/index.tsx` |
| Lesson template | Individual lesson page | `/pages/blog/[day].tsx` |
| Styling | Design tokens | `/tailwind.config.js` |
| Config | Next.js + Vercel settings | `next.config.js`, `vercel.json`, `tsconfig.json` |

### Important Notes
- **No secrets needed** — No API keys, no environment variables
- **Static site** — All content in JSON and React components
- **Fast deploys** — Next.js build time ~2 seconds

---

## 🎓 For Other Developers

### Before Starting:
1. Read this file first
2. Read `/README.md` for detailed architecture
3. Check recent changes log in README

### Common Tasks:
- **Edit home page:** `/pages/index.tsx`
- **Add/edit lesson:** `/public/data/agentic-commerce-lessons.json` (follow JSON schema)
- **Change colors/fonts:** `/tailwind.config.js` and component `className="..."`
- **Deploy:** Push to GitHub main branch (Vercel auto-deploys)

### Deployment Debug:
- **Local test:** `npm run dev` → http://localhost:3000
- **Build test:** `npm run build` (checks SSG generation)
- **Vercel logs:** https://vercel.com/mandarkashikars-projects/mandark-nextjs

---

## 📞 Contact & Escalation

**Owner:** Mandar Kashikar  
**Email:** mandaropenclaw@gmail.com  
**Telegram:** 8210290200  
**GitHub:** @mandarkashikar

---

## 📊 Checklist for Handoff

- [x] README written and comprehensive
- [x] PROJECT_STATUS documented
- [x] Code is clean and typed (TypeScript)
- [x] All 9 lessons fully written
- [x] Cron job configured and ready
- [x] Vercel deployment working
- [x] DNS config documented
- [x] No secrets in repo
- [x] Proper error handling
- [ ] DNS updated to point mandark.dev to Vercel (action needed)

---

**Status:** Ready for handoff. DNS change is the only remaining step.
