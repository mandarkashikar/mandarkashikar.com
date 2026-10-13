'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const timelineDataRich = [
  {
    id: 'elavon-2025',
    year: 'Jan 2025 – Present',
    role: 'Senior Product Manager, Vertical Lead – Retail SMB Commerce',
    company: 'Elavon Payments / U.S. Bank',
    location: 'Toronto, Canada',
    summary: 'Leading omni-channel commerce product strategy for SMBs — shipped Elavon Business Solutions eCommerce, a deep Wix integration, a Wix payments plugin, and Retail Omnicommerce.',
    achievements: [
      'Launched Elavon Business Solutions eCommerce — an end-to-end solution combining Wix\'s commerce platform with Elavon payments',
      'Launched the Wix–Elavon Payments plugin, enabling existing Wix merchants to accept Elavon payments natively',
      'Launched Elavon Business Solutions Retail Omnicommerce — unifying in-store and online selling for SMB merchants'
    ],
    projects: [
      {
        title: 'Elavon Business Solutions eCommerce',
        star: {
          situation: 'SMB merchants needed a simple, integrated way to sell online without stitching together disparate tools.',
          task: 'Build and launch an end-to-end ecommerce solution combining a best-in-class commerce platform with Elavon payments.',
          action: 'Led a deep product integration with Wix — aligning engineering, design, partnerships, and go-to-market across both organizations to ship a unified merchant experience.',
          result: 'Launched Elavon Business Solutions eCommerce. Live at elavon.com/industries/ecommerce.html.'
        }
      },
      {
        title: 'Wix–Elavon Payments Plugin',
        star: {
          situation: 'Existing Wix merchants who wanted to use Elavon as their payment processor had no native integration.',
          task: 'Build a payments plugin for the Wix ecosystem enabling seamless Elavon payment acceptance.',
          action: 'Defined plugin requirements, drove partner alignment with Wix, and led end-to-end delivery across product and engineering teams.',
          result: 'Launched the Wix–Elavon Payments plugin, expanding Elavon\'s reach to the existing Wix merchant base.'
        }
      }
    ]
  },
  {
    id: 'usbank-2022',
    year: '2022 – Jan 2025',
    role: 'Senior Product Manager – Web',
    company: 'Talech POS / U.S. Bank',
    location: 'Palo Alto, CA / Toronto, Canada',
    summary: 'Led product strategy and delivery for the merchant web platform — drove $200M in annual transaction volume, migrated 50,000+ merchants, and identified a $20M revenue opportunity.',
    achievements: [
      'Drove ~$200M in annual transaction volume through secure payment integrations (hosted fields, Checkout.js, lightbox, hosted page)',
      'Increased user engagement by 10% via a data-driven redesign of web reporting features',
      'Migrated 50,000+ merchants to the revamped platform with zero major incidents using in-app notifications and journey optimization',
      'Identified a $20M annual revenue opportunity through customer interviews, competitor analysis, and market research'
    ],
    projects: [
      {
        title: 'Merchant Platform Migration',
        star: {
          situation: '50,000–100,000 merchants needed to move to a revamped platform without disruption to their daily operations.',
          task: 'Drive adoption and ensure zero downtime during migration.',
          action: 'Designed an in-app notification system, optimized the merchant onboarding journey, and ran a phased rollout with rapid bug resolution loops.',
          result: 'Successfully migrated 50,000+ merchants with high adoption rates and no major incidents.'
        }
      },
      {
        title: '$20M Revenue Opportunity Discovery',
        star: {
          situation: 'Talech\'s product suite had an untapped segment with unmet marketing and growth needs.',
          task: 'Validate whether a new marketing product could generate meaningful revenue.',
          action: 'Conducted customer interviews, ran competitor analysis, and built a market sizing model. Presented findings and business case to leadership.',
          result: 'Identified a $20M annual revenue opportunity that shaped the product roadmap.'
        }
      }
    ]
  },
  {
    id: 'trinet-2021',
    year: '2021 – 2022',
    role: 'Senior Product Manager – Benefits Product Strategy',
    company: 'TriNet Inc.',
    location: 'San Jose, CA',
    summary: 'Led discovery, pilot launches, and expansion of new benefits products — generated $6M in volume growth and improved sales conversion by 3–6%.',
    achievements: [
      'Generated $6M in volume growth in 6 months through the IOM pilot launch (120 clients, NPS 9.0)',
      'Improved sales conversion by 3–6% through National Rates expansion — generating $4.8M in additional revenue',
      'IOM product was called out on TriNet\'s Q1 2022 earnings call',
      'Created a reusable end-to-end testing template adopted by future product teams'
    ],
    projects: [
      {
        title: 'Integrated Open Market (IOM)',
        star: {
          situation: '15–20% of TriNet\'s sales pipeline was being rejected by the pricing/risk team on benefits, causing lost SAAS revenue.',
          task: 'Redesign the offering to remove friction and drive real conversion.',
          action: 'Ran deep discovery — analyzed Salesforce win/loss data, interviewed clients and sales reps, and identified core pain points. Designed an integrated solution and led engineering implementation.',
          result: '120 clients and $7.5M in volume growth. NPS of 9.0. Called out on the Q1 2022 earnings call.'
        }
      }
    ]
  },
  {
    id: 'ey-2019',
    year: '2019 – 2021',
    role: 'Senior Consultant – Strategy and Analytics',
    company: 'Ernst & Young / EY Parthenon',
    location: 'Arlington, VA',
    summary: 'Led data and analytics workstreams for Fortune 500 clients — identified $270M+ in combined savings opportunities.',
    achievements: [
      'Identified $130M in restructuring savings for a healthcare spin-off ($30M immediately actionable)',
      'Quantified $140M annual attrition cost for a major healthcare provider — led to a $500K+ follow-on engagement',
      'Analyzed 8,000+ employee responses for the Gates Foundation, influencing return-to-work policy across 10 global offices',
      'Created a repeatable labor strategy offering that generated $10M+ in follow-on EY Parthenon revenue'
    ],
    projects: [
      {
        title: 'Conifer Health Solutions – Labor Strategy',
        star: {
          situation: 'An $18B healthcare company preparing to spin off needed a future-state labor model.',
          task: 'Build an accurate picture of workforce costs and model restructuring scenarios.',
          action: 'Led the data and modeling workstream. Designed surveys, built a simulation model, and created a Power BI dashboard.',
          result: 'Identified $130M in raw savings opportunities, $30M actionable within 6 months.'
        }
      }
    ]
  },
  {
    id: 'mpower-2018',
    year: '2018',
    role: 'Growth Strategy Intern',
    company: 'MPOWER Financing',
    location: 'Washington, DC',
    summary: 'Built two customer acquisition programs from scratch — generated $2.2M in loan volume.',
    achievements: [
      'Grew the referral channel 120% in 50 days, generating $2.2M in loan volume',
      'Launched a scholarship program that attracted 750 applications at $0.40 CPC (vs. $8 industry benchmark)',
      'Increased website traffic by 20% through the scholarship campaign with 172 backlinks',
      'Uncovered key customer insights on APR priorities and decision-makers'
    ],
    projects: [
      {
        title: 'Customer Referral Program Redesign',
        star: {
          situation: 'Referral had the best funnel conversion but the program was broken — long reward timelines, unreliable fulfillment.',
          task: 'Redesign from scratch and create measurable impact.',
          action: 'Researched behavioral economics and gamification. Analyzed 7 competitor referral programs. Designed and launched MVP.',
          result: '105 new referrals in the first run vs. 88 in MPOWER\'s entire prior history. 120% channel growth in 50 days.'
        }
      }
    ]
  },
  {
    id: 'startups-2015',
    year: '2015 – 2017',
    role: 'Marketing & Operations Manager',
    company: 'Retail eCommerce & SMB Consulting Startups',
    location: 'Pune, India',
    summary: 'Learned small-business growth from the inside — launching services, winning the first customers, and operating an ecommerce business close to the merchant.',
    achievements: [
      'Launched three service offerings and a go-to-market motion that secured the first 13 clients and reached $20K in monthly revenue',
      'Built partnerships, events, newsletters, and social campaigns that generated 7,000+ interactions and ~100 leads',
      'Ran a nationwide inventory-clearance campaign for an ecommerce venture that generated $220K in revenue'
    ],
    projects: []
  },
  {
    id: 'philips-2012',
    year: '2012 – 2016',
    role: 'Assistant Manager – New Product Development',
    company: 'Philips Medical Devices',
    location: 'Pune, India',
    summary: 'Started as an engineer close to the physical product — developing medical-device components, improving supplier systems, and handling quality problems where reliability mattered.',
    achievements: [
      'Led process improvements across 35 global suppliers, delivering $600K in annual savings',
      'Resolved 300+ critical quality issues, including field failures and recalls, across supplier quality and new product development',
      'Built a predictive defect model that helped reduce recurring supplier defects by 30%'
    ],
    projects: []
  },
]

const lifeTimeline = [
  {
    period: 'Early years',
    location: 'Wardha, Maharashtra, India',
    type: 'Origins',
    title: 'Born in a small town in Maharashtra',
    organization: 'Wardha',
    description: 'My story began in Wardha before Pune became the place where I studied engineering and started my career.'
  },
  {
    period: '2008 – 2012',
    location: 'Pune, Maharashtra, India',
    type: 'Education',
    title: 'Started with systems and engineering',
    organization: 'University of Pune · BTech, Industrial Engineering',
    description: 'Built the analytical and operational foundation that still shapes how I approach products: understand the system, find the constraint, and improve the whole flow.'
  },
  {
    period: '2012 – 2016',
    location: 'Pune, Maharashtra, India',
    type: 'Engineering',
    title: 'Learned what product reliability really means',
    organization: 'Philips Medical Devices',
    description: 'Worked on new-product development and supplier quality for medical devices, where a design decision or process failure could have real consequences.',
    experienceId: 'philips-2012'
  },
  {
    period: '2015 – 2017',
    location: 'Pune, Maharashtra, India',
    type: 'Entrepreneurship',
    title: 'Got close to the merchant',
    organization: 'Retail ecommerce & SMB consulting startups',
    description: 'Moved from engineering into growth and operations—launching services, finding the first customers, and learning firsthand how small businesses sell and survive.',
    experienceId: 'startups-2015'
  },
  {
    period: '2017 – 2019',
    location: 'Pune, Maharashtra, India → College Park, Maryland, US',
    type: 'Move + Education',
    title: 'Crossed continents to broaden the toolkit',
    organization: 'University of Maryland, Robert H. Smith School of Business',
    description: 'Earned an MBA and MS in Marketing Analytics, connecting engineering instincts with strategy, customer behavior, and data-driven decision-making.'
  },
  {
    period: '2017 – 2019',
    location: 'College Park, Maryland, US',
    type: 'Community',
    title: 'Made entrepreneurship part of the education',
    organization: 'Dingman Center for Entrepreneurship',
    description: 'Served as a Marketing Analytics graduate assistant, Smith Ambassador, and Faculty Fellow Scholar. Designed Smith in the Valley and the Smith–MPOWER Marketing Case Competition, and helped lead the Marketing Association and Entrepreneurship Club.'
  },
  {
    period: '2018',
    location: 'Washington, DC, US',
    type: 'Growth',
    title: 'Found product work through growth experiments',
    organization: 'MPOWER Financing',
    description: 'Built acquisition programs from scratch, including a referral redesign that generated $2.2M in loan volume in two months.',
    experienceId: 'mpower-2018'
  },
  {
    period: '2019 – 2021',
    location: 'Washington, DC, US',
    type: 'Strategy + Analytics',
    title: 'Learned to turn ambiguity into executive decisions',
    organization: 'EY-Parthenon',
    description: 'Led analytical workstreams for complex organizations, translating messy workforce and culture data into strategies for C-suite and board audiences.',
    experienceId: 'ey-2019'
  },
  {
    period: '2021 – 2022',
    location: 'San Francisco, California, US',
    type: 'Product',
    title: 'Made the move into product management',
    organization: 'TriNet',
    description: 'Led discovery and launches for benefits products, turning rejected demand and customer friction into new products and measurable growth.',
    experienceId: 'trinet-2021'
  },
  {
    period: '2022 – 2025',
    location: 'San Francisco, California, US → Toronto, Ontario, Canada',
    type: 'Commerce + Move',
    title: 'Commerce and payments became the throughline',
    organization: 'talech / U.S. Bank',
    description: 'Led the merchant web platform across California and Canada—shipping payments and commerce capabilities, migrating 50,000+ merchants, and supporting $200M+ in annual transaction volume.',
    experienceId: 'usbank-2022'
  },
  {
    period: '2025 – Present',
    location: 'Toronto, Ontario, Canada',
    type: '0→1 Product Leadership',
    title: 'Built Elavon Business Solutions from zero to launch',
    organization: 'Elavon / U.S. Bank',
    description: 'Drove the Wix integration and launched a unified commerce-and-payments platform now used by 1,000 merchants, with ~$800K in contracted ARR and ~$40M in projected annual payment volume.',
    experienceId: 'elavon-2025'
  },
]

export default function Home() {
  const [selectedExp, setSelectedExp] = useState<typeof timelineDataRich[0] | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  function applyTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkMode = saved === 'dark' || (!saved && prefersDark)
    applyTheme(isDarkMode)
    const frame = window.requestAnimationFrame(() => setIsDark(isDarkMode))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedExp(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    applyTheme(newTheme)
  }

  const projects = [
    {
      name: 'LinkedIn Slop Filter',
      status: 'Live',
      statusColor: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      description:
        'Chrome extension that watches your LinkedIn feed and fades AI-generated filler, thought-leader platitudes, and ads in real time. Classifies posts 0–100% slop using local Ollama (fully private) or Jev (TypeSafe AI). Includes hiring post detection and draggable feed UI.',
      tags: ['AI / Agents', 'Chrome Extension', 'Open Source'],
      link: 'https://github.com/mandarkashikar/linkedin-slop-filter',
    },
    {
      name: 'PM Office Hours Simulator (Lenny\'s)',
      status: 'Build Challenge',
      statusColor: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      description:
        'Interactive video-call experience with multi-agent debate. Aggregates Lenny Rachitsky\'s archive (349 posts, 291 transcripts) + other PM voices for immersive learning.',
      tags: ['AI / Agents', 'PM Learning', 'Next.js'],
      link: 'https://github.com/mandarkashikar/lenny-office-hours',
    },
    {
      name: 'Buyer Agent ("Surprise Buy")',
      status: 'In Progress',
      statusColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      description:
        'An agentic commerce prototype exploring AI-driven purchasing on behalf of consumers — with configurable spend guardrails, merchant trust signals, and transparent decision logs.',
      tags: ['AI / Agents', 'Commerce', 'Next.js'],
      link: null,
    },
    {
      name: 'Studio Ocea',
      status: 'Live',
      statusColor: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      description:
        'Custom artwork brand for modern homes. Co-founded with my wife — handles everything from original prints to commission-based pieces.',
      tags: ['E-commerce', 'Small Business', 'Art'],
      link: 'https://studioocea.com',
    },
    {
      name: 'Decoding Agentic Commerce',
      status: 'Active',
      statusColor: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      description:
        'A 90-day learning program exploring AI-powered shopping, agent architecture, and product strategy for SMBs.',
      tags: ['Learning', 'Agentic Commerce', 'Product'],
      link: '/blog',
    },
  ]

  return (
    <>
    <Head>
      <title>Mandar Kashikar — Senior PM, Commerce & Payments</title>
      <meta name="description" content="Senior Product Manager with 14 years of experience across commerce, payments, and strategy. Building omni-channel solutions for SMBs at Elavon / U.S. Bank." />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta property="og:title" content="Mandar Kashikar — Senior PM, Commerce & Payments" />
      <meta property="og:description" content="Senior Product Manager building omni-channel commerce solutions at Elavon / U.S. Bank. 14 years across product, strategy, and analytics." />
      <meta property="og:image" content="https://mandark.dev/profile.jpg" />
      <meta property="og:url" content="https://mandark.dev" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Mandar Kashikar — Senior PM, Commerce & Payments" />
      <meta name="twitter:description" content="Senior Product Manager building omni-channel commerce solutions at Elavon / U.S. Bank." />
      <meta name="twitter:image" content="https://mandark.dev/profile.jpg" />
    </Head>
    <div className="min-h-screen overflow-x-clip bg-[var(--portfolio-bg)] text-[var(--portfolio-text)] transition-colors">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-[var(--portfolio-accent)] focus:px-3 focus:py-2 focus:text-[#14241a]">
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:flex lg:gap-16">
        <header className="pt-12 pb-10 lg:sticky lg:top-0 lg:w-[40%] lg:self-start lg:py-20">
          <div className="relative lg:block">
            <div>
              <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-xl ring-1 ring-[var(--portfolio-line)]">
                <Image src="/profile.jpg" alt="Mandar Kashikar" fill priority className="object-cover" />
              </div>
              <p className="font-mono text-xs tracking-wide text-[var(--portfolio-accent)]">Senior Product Manager · Super IC</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Mandar Kashikar</h1>
              <p className="mt-4 max-w-sm text-base text-[var(--portfolio-muted)]">
                <span className="text-[var(--portfolio-accent)]" aria-hidden="true">↳ </span>
                Building commerce, payments, and AI products from messy problem to measurable outcome.
              </p>
              <p className="mt-2 text-sm text-[var(--portfolio-faint)]">Toronto, Canada</p>
              <div className="mt-8 h-px w-24 rounded-full bg-[var(--portfolio-accent)]" aria-hidden="true" />
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="absolute right-0 top-0 rounded-md border border-[var(--portfolio-line)] px-3 py-2 font-mono text-xs text-[var(--portfolio-muted)] lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <nav className="mt-8 hidden lg:block" aria-label="Sections">
            <ul className="space-y-3">
              {[
                ['about', 'About'],
                ['projects', 'Projects'],
                ['timeline', 'Timeline'],
                ['field-notes', 'Field notes'],
                ['contact', 'Contact'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="group inline-flex items-center gap-3 text-sm font-medium text-[var(--portfolio-faint)] transition-colors hover:text-[var(--portfolio-text)]">
                    <span className="h-px w-6 bg-[var(--portfolio-line)] transition-all group-hover:w-10 group-hover:bg-[var(--portfolio-accent)]" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {mobileMenuOpen && (
            <nav id="mobile-nav" className="mt-7 grid grid-cols-2 gap-2 rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-3 lg:hidden" aria-label="Mobile sections">
              {[
                ['about', 'About'],
                ['projects', 'Projects'],
                ['timeline', 'Timeline'],
                ['field-notes', 'Field notes'],
                ['contact', 'Contact'],
              ].map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm text-[var(--portfolio-muted)] hover:bg-[var(--portfolio-surface-2)] hover:text-[var(--portfolio-text)]">
                  {label}
                </a>
              ))}
            </nav>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--portfolio-line)] pt-7">
            <a href="mailto:mandarkashikar1@gmail.com" className="text-sm text-[var(--portfolio-muted)] hover:text-[var(--portfolio-accent)] hover:underline">Email</a>
            <a href="https://linkedin.com/in/mandarkashikar" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--portfolio-muted)] hover:text-[var(--portfolio-accent)] hover:underline">LinkedIn</a>
            <a href="https://github.com/mandarkashikar" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--portfolio-muted)] hover:text-[var(--portfolio-accent)] hover:underline">GitHub</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--portfolio-muted)] hover:text-[var(--portfolio-accent)] hover:underline">Resume ↓</a>
            <button onClick={toggleTheme} className="text-sm text-[var(--portfolio-muted)] hover:text-[var(--portfolio-accent)]" title={isDark ? 'Use light mode' : 'Use dark mode'}>
              {isDark ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>

        <main id="main" className="min-w-0 lg:w-[60%] lg:py-20">
          <section id="about" className="mb-20 scroll-mt-8">
            <h2 className="portfolio-section-title"><span />About</h2>
            <div className="space-y-4 text-lg leading-relaxed text-[var(--portfolio-muted)]">
              <p>
                I&apos;m a senior product manager who stays close to the work: I write strategy, run discovery, build the analytics, and use code and AI to make ideas tangible.
              </p>
              <p>
                At Elavon / U.S. Bank, I took Elavon Business Solutions from zero to launch and drove the Wix integration end-to-end. The platform has reached 1,000 merchants, ~$800K in contracted ARR, and ~$40M in projected annual payment volume. After launch, I uncovered the onboarding bottleneck through product data and 50+ merchant interviews, then rebuilt the activation motion—lifting activation from 40% to ~65% and cutting time to first transaction from 40 days to 19. My path to product spans engineering, entrepreneurship, strategy consulting, and analytics.
              </p>
              <p>
                Outside work, I build practical experiments in AI and commerce—from a LinkedIn slop filter to an AI-powered PM second brain and a 90-day field study on agentic commerce.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--portfolio-accent)]">How I operate</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Start with the customer and the evidence, not the roadmap.',
                  'Move fluidly from strategy to data, prototype, requirements, and launch.',
                  'Use AI as a working tool—while keeping judgment and accountability human.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-[var(--portfolio-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--portfolio-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="projects" className="mb-20 scroll-mt-8">
            <h2 className="portfolio-section-title"><span />Projects</h2>
            <p className="mb-8 text-sm text-[var(--portfolio-muted)]">Things I&apos;ve built to test ideas, sharpen my craft, and learn in public.</p>
            <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2">
              {projects.map((project) => {
                const card = (
                  <>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="font-medium text-[var(--portfolio-text)] transition-colors group-hover:text-[var(--portfolio-accent)]">{project.name}</h3>
                      <span className="shrink-0 rounded-full border border-[var(--portfolio-line)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--portfolio-faint)]">{project.status}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--portfolio-muted)]">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
                      {project.tags.map((tag) => <li key={tag} className="font-mono text-[10px] text-[var(--portfolio-faint)]">{tag}</li>)}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-[var(--portfolio-accent)]">
                      {project.link ? (project.link.startsWith('/') ? 'Explore' : 'View project') : 'In development'}
                      {project.link && <span className="transition-transform group-hover:translate-x-1">→</span>}
                    </span>
                  </>
                )

                return (
                  <li key={project.name}>
                    {project.link ? (
                      <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex h-full flex-col rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-5 transition-colors hover:border-[var(--portfolio-accent)] hover:bg-[var(--portfolio-surface-2)]">
                        {card}
                      </a>
                    ) : (
                      <div className="group flex h-full flex-col rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-5">{card}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>

          <section id="timeline" className="mb-20 scroll-mt-8">
            <h2 className="portfolio-section-title"><span />Life &amp; career timeline</h2>
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-[var(--portfolio-muted)]">From a small-town start in Wardha to engineering in Pune and product leadership in Toronto—the moves, schools, communities, and jobs that shaped how I build.</p>
            <ol className="relative ml-2 border-l border-[var(--portfolio-line)]">
              {lifeTimeline.map((item) => {
                const experience = item.experienceId ? timelineDataRich.find((entry) => entry.id === item.experienceId) : undefined
                const content = (
                  <>
                    <span className="absolute -left-[7px] top-7 h-3 w-3 rounded-full border-2 border-[var(--portfolio-line)] bg-[var(--portfolio-bg)] transition-colors group-hover:border-[var(--portfolio-accent)]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--portfolio-accent)]">{item.type}</span>
                    <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
                      <h3 className="text-lg font-semibold tracking-tight text-[var(--portfolio-text)] group-hover:text-[var(--portfolio-accent)]">{item.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-[var(--portfolio-faint)]">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[var(--portfolio-text)]">{item.organization}</p>
                    <p className="mt-1 font-mono text-xs text-[var(--portfolio-faint)]">{item.location}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--portfolio-muted)]">{item.description}</p>
                    {experience && <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--portfolio-accent)]">View outcomes <span className="transition-transform group-hover:translate-x-1">→</span></span>}
                  </>
                )

                return (
                  <li key={`${item.period}-${item.title}`} className="relative pb-10 pl-7 last:pb-0">
                    {experience ? (
                      <button onClick={() => setSelectedExp(experience)} className="group block w-full rounded-lg p-4 text-left transition-colors hover:bg-[var(--portfolio-surface)]">{content}</button>
                    ) : (
                      <article className="group rounded-lg p-4">{content}</article>
                    )}
                  </li>
                )
              })}
            </ol>

            <div className="mt-12 border-t border-[var(--portfolio-line)] pt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--portfolio-faint)]">Focus areas</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {['0→1 Product Strategy', 'Commerce & Payments', 'Agentic Commerce', 'Customer Discovery', 'API Integrations', 'Product Analytics', 'Go-to-Market', 'AI-enabled PM Craft'].map((skill) => (
                  <li key={skill} className="rounded-full border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] px-3 py-1 text-xs text-[var(--portfolio-muted)]">{skill}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="field-notes" className="mb-20 scroll-mt-8">
            <h2 className="portfolio-section-title"><span />Field notes</h2>
            <Link href="/blog" className="group block rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-6 transition-colors hover:border-[var(--portfolio-accent)] hover:bg-[var(--portfolio-surface-2)]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--portfolio-accent)]">90-day learning program</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Decoding Agentic Commerce</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--portfolio-muted)]">Daily lessons on AI-powered shopping, agent architecture, trust, payments, and product strategy for small businesses.</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--portfolio-accent)]">Read the field notes <span className="transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          </section>

          <section id="contact" className="mb-16 scroll-mt-8">
            <h2 className="portfolio-section-title"><span />Contact</h2>
            <p className="max-w-md text-lg text-[var(--portfolio-muted)]">I&apos;m always interested in ambitious commerce, payments, and AI product problems.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:mandarkashikar1@gmail.com" className="rounded-md bg-[var(--portfolio-accent)] px-4 py-2 text-sm font-medium text-[#14241a] hover:opacity-90">Email me</a>
              <a href="https://linkedin.com/in/mandarkashikar" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--portfolio-line)] px-4 py-2 text-sm font-medium hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)]">LinkedIn</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--portfolio-line)] px-4 py-2 text-sm font-medium hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)]">Download resume</a>
            </div>
            <footer className="mt-16 border-t border-[var(--portfolio-line)] pt-6 text-xs text-[var(--portfolio-faint)]">© 2026 Mandar Kashikar. Built with Next.js.</footer>
          </section>
        </main>
      </div>

      {selectedExp && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-labelledby="experience-dialog-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedExp(null) }}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-bg)] shadow-2xl">
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-[var(--portfolio-line)] bg-[var(--portfolio-bg)] p-6">
              <div>
                <h2 id="experience-dialog-title" className="text-2xl font-semibold">{selectedExp.role}</h2>
                <p className="mt-1 text-sm text-[var(--portfolio-muted)]">{selectedExp.company} · {selectedExp.year}</p>
              </div>
              <button onClick={() => setSelectedExp(null)} className="rounded-md border border-[var(--portfolio-line)] px-2.5 py-1.5 text-sm text-[var(--portfolio-muted)] hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)]" aria-label="Close experience details">Close</button>
            </div>
            <div className="space-y-8 p-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--portfolio-accent)]">Selected outcomes</h3>
                <ul className="mt-4 space-y-3">
                  {selectedExp.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-[var(--portfolio-muted)]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--portfolio-accent)]" />{achievement}</li>
                  ))}
                </ul>
              </div>
              {selectedExp.projects.length > 0 && (
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--portfolio-accent)]">Case studies</h3>
                  <div className="mt-4 space-y-4">
                    {selectedExp.projects.map((project) => (
                      <article key={project.title} className="rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-5">
                        <h4 className="font-semibold">{project.title}</h4>
                        <dl className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--portfolio-muted)]">
                          {Object.entries(project.star).map(([label, value]) => value && (
                            <div key={label}><dt className="inline font-medium capitalize text-[var(--portfolio-text)]">{label}: </dt><dd className="inline">{value}</dd></div>
                          ))}
                        </dl>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}
