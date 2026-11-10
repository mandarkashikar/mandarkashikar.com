import Link from 'next/link';
import Head from 'next/head';

export default function TermsOfService() {
  const lastUpdated = 'November 10, 2026';

  return (
    <>
      <Head>
        <title>Terms of Service — Mandar Kashikar</title>
        <meta name="description" content="Terms of service for mandark.dev." />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-3xl px-6 py-8">
            <Link href="/" className="mb-8 inline-block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-2">Terms of Service</h1>
            <p className="text-sm text-gray-500 dark:text-gray-500">Last updated: {lastUpdated}</p>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-12">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing or using mandark.dev (the &quot;Site&quot;), you agree to be bound by these
              Terms of Service. If you do not agree, please discontinue use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Purpose of This Site</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Site is a personal portfolio presenting information about the owner&apos;s work,
              projects, and professional background. Content is provided for informational purposes
              only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">No Warranty</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Site and its content are provided &quot;as is&quot; and &quot;as available,&quot; without
              warranties of any kind, express or implied. We do not guarantee that the Site will be
              error-free, uninterrupted, or always available.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All content on this Site, including text, design, and code, is owned by the Site owner
              unless otherwise noted, and may not be reproduced or redistributed without permission,
              except for personal, non-commercial reference.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">External Links</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Site may link to third-party websites (such as GitHub, LinkedIn, or blog posts).
              We are not responsible for the content, policies, or practices of any third-party
              sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To the fullest extent permitted by law, the Site owner shall not be liable for any
              damages arising from your use of, or inability to use, the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Changes to These Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms may be updated from time to time. Continued use of the Site after changes
              are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Questions about these Terms can be sent via the contact link on the{' '}
              <Link href="/" className="underline hover:text-black dark:hover:text-white">
                home page
              </Link>
              . See also our{' '}
              <Link href="/privacy" className="underline hover:text-black dark:hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
