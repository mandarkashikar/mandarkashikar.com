'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const timelineDataRich = [
  {
    id: 'elavon-2025',
    year: 'Jan 2025 – Present',
    role: 'Lead Product Manager – Retail Omnicommerce',
    company: 'Elavon Payments / U.S. Bank',
    location: 'Toronto, Canada',
    summary: 'Leading omni-channel commerce product strategy for SMBs — shipped Elavon Business Solutions eCommerce, a deep Wix integration, and a Wix payments plugin. Currently launching Retail Omnicommerce (March 2026).',
  },
  {
    id: 'usbank-2022',
    year: '2022 – Jan 2025',
    role: 'Senior Product Manager – Web',
    company: 'Talech POS / U.S. Bank',
    location: 'Toronto, Canada',
    summary: 'Led product strategy and delivery for the merchant web platform — drove $200M in annual transaction volume, migrated 50,000+ merchants, and identified a $20M revenue opportunity.',
  },
  {
    id: 'trinet-2021',
    year: '2021 – 2022',
    role: 'Senior Product Manager – Benefits Product Strategy',
    company: 'TriNet Inc.',
    location: 'San Jose, CA',
    summary: 'Led discovery, pilot launches, and expansion of new benefits products — generated $6M in volume growth and improved sales conversion by 3–6%.',
  },
  {
    id: 'ey-2019',
    year: '2019 – 2021',
    role: 'Senior Consultant – Strategy and Analytics',
    company: 'Ernst & Young / EY Parthenon',
    location: 'Arlington, VA',
    summary: 'Led data and analytics workstreams for Fortune 500 clients — identified $270M+ in combined savings opportunities and delivered insights shaping policy and operations.',
  },
  {
    id: 'mpower-2018',
    year: '2018',
    role: 'Growth Strategy Intern',
    company: 'MPOWER Financing',
    location: 'Washington, DC',
    summary: 'Built two customer acquisition programs from scratch — generated $2.2M in loan volume through a redesigned referral program and reached 1M+ potential customers through a scholarship launch.',
  },
]

export default function Home() {
  const [selectedExp, setSelectedExp] = useState<typeof timelineDataRich[0] | null>(null)

  const projects = [
    {
      name: 'Buyer Agent ("Surprise Buy")',
      status: 'In Progress',
      statusColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      description:
        'An agentic commerce prototype exploring AI-driven purchasing on behalf of consumers — with configurable spend guardrails, merchant trust signals, and transparent decision logs.',
      tags: ['AI / Agents', 'Commerce', 'Next.js'],
      link: 'https://github.com/mandarkashikar',
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
          <Link href="/" className="text-2xl font-bold hover:opacity-70 transition-opacity">
            MK
          </Link>
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
          <div className="flex gap-4 items-center">
            <a
              href="mailto:mandaropenclaw@gmail.com"
              className="text-sm hover:opacity-70 transition-opacity"
              title="Email"
            >
              ✉️
            </a>
            <a
              href="https://linkedin.com/in/mandarkashikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/mandarkashikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              title="GitHub"
            >
              gh
            </a>
          </div>
        </div>
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
              SMBs. Outside work, I co-run <a href="https://studioocea.com" className="hover:underline font-semibold">Studio Ocea</a> with my wife — an art brand that keeps my
              product instincts grounded in real merchant pain.
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
                href="mailto:mandaropenclaw@gmail.com"
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
