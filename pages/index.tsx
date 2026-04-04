import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Mandar Kashikar — Product Manager</title>
        <meta
          name="description"
          content="Lead Product Manager specializing in omni-channel commerce and payments for SMBs."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black transition-colors text-black dark:text-white">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl font-bold hover:opacity-70"
              aria-label="Menu"
            >
              MK
            </button>
            <nav className="hidden md:flex gap-8">
              <a href="#skills" className="text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Skills
              </a>
              <a href="#experience" className="text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Experience
              </a>
              <a href="#projects" className="text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Projects
              </a>
              <Link href="/blog" className="text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Blog
              </Link>
            </nav>
            <div className="flex gap-4">
              <a href="mailto:mandaropenclaw@gmail.com" className="text-sm hover:opacity-70">
                📧
              </a>
              <a
                href="https://linkedin.com/in/mandarkashikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-70"
              >
                in
              </a>
              <a
                href="https://github.com/mandarkashikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-70"
              >
                gh
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 p-4 space-y-3">
              <a href="#skills" className="block text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Skills
              </a>
              <a href="#experience" className="block text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Experience
              </a>
              <a href="#projects" className="block text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Projects
              </a>
              <Link href="/blog" className="block text-sm hover:text-gray-600 dark:hover:text-gray-400">
                Blog
              </Link>
            </div>
          )}
        </header>

        <main className="mx-auto max-w-4xl px-6 py-12 md:py-24">
          {/* Hero */}
          <section className="mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Mandar Kashikar</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Lead Product Manager specializing in omni-channel commerce and payments for small businesses.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Focused on building products that solve real problems. Currently at Elavon Payments.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Product Strategy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Omni-channel commerce, ecommerce, payments infrastructure, SMB tools, product roadmapping
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Methods</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Jobs-to-be-done, user research, competitive analysis, SQL, data analysis, rapid prototyping
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Emerging Tech</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Agentic commerce, AI-powered UX, multi-agent orchestration, LLMs for product
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
                <h3 className="font-semibold text-lg">Lead Product Manager, Elavon Payments</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Retail & Ecommerce Solutions</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2021 — Present</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Buyer Agent ("Surprise Buy")</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  MVP agentic commerce prototype. User sets constraints → agent proposes options → user
                  approves or auto-buys. Stripe-ready demo candidate.
                </p>
                <a
                  href="https://github.com/mandarkashikar"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">PM Office Hours Simulator</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Interactive video-call experience with multi-agent debate. Aggregates Lenny Rachitsky's
                  archive (349 posts, 291 transcripts) + other PM voices.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">This Site</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Portfolio + blog. Built with Next.js, Tailwind CSS, deployed to mandark.dev via
                  Cloudflare Pages.
                </p>
              </div>
            </div>
          </section>

          {/* Blog CTA */}
          <section className="mb-20 border-t border-gray-200 dark:border-gray-800 pt-12">
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Decoding Agentic Commerce</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                A 90-day learning program exploring AI-powered shopping, agent architecture, and product
                strategy for SMBs.
              </p>
              <Link
                href="/blog"
                className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-80 transition-opacity"
              >
                Explore the Blog
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Built with Next.js, Tailwind CSS, and care.</p>
          </footer>
        </main>
      </div>
    </>
  );
}
