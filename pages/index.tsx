'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const timelineDataRich = [
  {
    id: 'elavon-2025',
    year: 'Jan 2025 – Present',
    role: 'Lead Product Manager – Retail Omnicommerce',
    company: 'Elavon Payments / U.S. Bank',
    location: 'Toronto, Canada',
    summary: 'Leading omni-channel commerce product strategy for SMBs — shipped Elavon Business Solutions eCommerce, a deep Wix integration, and a Wix payments plugin. Currently launching Retail Omnicommerce (March 2026).',
    achievements: [
      'Launched Elavon Business Solutions eCommerce — an end-to-end solution combining Wix\'s commerce platform with Elavon payments',
      'Launched the Wix–Elavon Payments plugin, enabling existing Wix merchants to accept Elavon payments natively',
      'Launching Elavon Business Solutions Retail Omnicommerce in March 2026 — unifying in-store and online selling for SMB merchants'
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
    location: 'Toronto, Canada',
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
]

export default function Home() {
  const [selectedExp, setSelectedExp] = useState<typeof timelineDataRich[0] | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkMode = saved === 'dark' || (!saved && prefersDark)
    setIsDark(isDarkMode)
    applyTheme(isDarkMode)
  }, [])

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    applyTheme(newTheme)
  }

  const projects = [
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
      link: 'https://github.com/mandarkashikar/buyer-agent-pay-prototype',
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors text-black dark:text-white">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl font-bold hover:opacity-70 transition-opacity md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Menu"
          >
            MK
            <span
              className={`absolute w-1.5 h-1.5 bg-current rounded-full transition-all ${
                mobileMenuOpen ? 'top-0' : 'bottom-0'
              }`}
            ></span>
          </button>

          <Link href="/" className="hidden md:block text-2xl font-bold hover:opacity-70 transition-opacity">
            MK
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <a href="#experience" className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition">
              Experience
            </a>
            <a href="#projects" className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition">
              Projects
            </a>
            <a href="/blog" className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition">
              Blog
            </a>
          </nav>

          {/* Desktop Icons + Theme Toggle */}
          <div className="flex gap-4 items-center">
            <a
              href="mailto:mandarkashikar1@gmail.com"
              className="text-lg hover:opacity-70 transition-opacity"
              title="Email"
            >
              ✉️
            </a>
            <a
              href="https://linkedin.com/in/mandarkashikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:opacity-70 transition-opacity flex items-center justify-center w-6 h-6"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/mandarkashikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:opacity-70 transition-opacity flex items-center justify-center w-6 h-6"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button
              onClick={toggleTheme}
              className="text-lg hover:opacity-70 transition-opacity"
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <nav className="flex flex-col gap-0">
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
              >
                Projects
              </a>
              <a
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                Blog
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-800">
              <Image
                src="/profile.jpg"
                alt="Mandar Kashikar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Mandar Kashikar</h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
              Lead Product Manager — Retail Omnicommerce & Payments
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              At Elavon / U.S. Bank, I build omni-channel commerce solutions that unify online and in-store selling for
              SMBs. Outside work, I co-run{' '}
              <a href="https://studioocea.com" className="hover:underline font-semibold">
                Studio Ocea
              </a>{' '}
              with my wife — an art brand that keeps my product instincts grounded in real merchant pain.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://drive.google.com/file/d/1pVIH2_JIrzbLMbx5y9ybk6Nkv3vjWYpg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-80 transition-opacity"
              >
                Resume ↗
              </a>
              <a
                href="mailto:mandarkashikar1@gmail.com"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Product Strategy & Roadmap',
              'Omni-channel Commerce',
              'Payments & POS Systems',
              'SMB Solutions',
              'API Integrations',
              'Cross-functional Leadership',
              'Go-to-Market Strategy',
              'Data Analytics',
              'Agile / Scrum',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24" id="experience">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-4">
            {timelineDataRich.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(selectedExp?.id === exp.id ? null : exp)}
                className="w-full text-left p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4">{exp.year}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.summary}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Experience Modal */}
        {selectedExp && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:p-0">
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg max-h-[90vh] overflow-y-auto max-w-2xl w-full">
              <div className="sticky top-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">{selectedExp.role}</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedExp.company} • {selectedExp.year}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="text-2xl hover:opacity-70 transition-opacity"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Achievements */}
                {selectedExp.achievements && selectedExp.achievements.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Achievements</h3>
                    <ul className="space-y-2">
                      {selectedExp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 flex gap-3">
                          <span className="text-gray-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Projects */}
                {selectedExp.projects && selectedExp.projects.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Key Projects</h3>
                    <div className="space-y-4">
                      {selectedExp.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/50"
                        >
                          <h4 className="font-semibold mb-3">{project.title}</h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            {project.star.situation && (
                              <div>
                                <strong className="text-gray-900 dark:text-white">Situation:</strong> {project.star.situation}
                              </div>
                            )}
                            {project.star.task && (
                              <div>
                                <strong className="text-gray-900 dark:text-white">Task:</strong> {project.star.task}
                              </div>
                            )}
                            {project.star.action && (
                              <div>
                                <strong className="text-gray-900 dark:text-white">Action:</strong> {project.star.action}
                              </div>
                            )}
                            {project.star.result && (
                              <div>
                                <strong className="text-gray-900 dark:text-white">Result:</strong> {project.star.result}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Projects */}
        <section className="mb-24" id="projects">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-1 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block text-sm font-semibold hover:underline"
                >
                  {project.link.startsWith('/') ? 'Explore' : 'View'} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Blog CTA */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-12">
          <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Decoding Agentic Commerce</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              A 90-day learning program exploring AI-powered shopping, agent architecture, and product strategy for
              SMBs.
            </p>
            <a
              href="/blog"
              className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-80 transition-opacity"
            >
              Read the Blog
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Built with Next.js, Tailwind CSS, and care. © 2026 Mandar Kashikar.</p>
        </footer>
      </main>
    </div>
  )
}
