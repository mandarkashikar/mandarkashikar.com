import Link from 'next/link';
import Head from 'next/head';

export default function Privacy() {
  const lastUpdated = 'November 10, 2026';

  return (
    <>
      <Head>
        <title>Privacy Policy — Mandar Kashikar</title>
        <meta name="description" content="Privacy policy for mandark.dev." />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-3xl px-6 py-8">
            <Link href="/" className="mb-8 inline-block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-500 dark:text-gray-500">Last updated: {lastUpdated}</p>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-12 prose-content">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This site (mandark.dev) is a personal portfolio. This policy explains what information
              is collected when you visit, and how it is used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              We use PostHog, a privacy-focused analytics provider, to understand how visitors use
              this site. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Pages viewed, time on page, and navigation paths</li>
              <li>Device, browser, and operating system information</li>
              <li>Approximate location (derived from IP address, e.g. city/country)</li>
              <li>Referring website or search engine</li>
              <li>Interactions with specific elements (e.g. resume, GitHub, or project links)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              We do not require account creation or login, and we do not knowingly collect your
              name, email address, or other directly identifying information unless you choose to
              provide it (for example, by emailing us directly).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">How We Use Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Information collected is used solely to understand site traffic and improve the
              content and experience of this portfolio. We do not sell or share this information
              with third parties for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Cookies &amp; Tracking</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This site may use cookies or similar local storage technologies set by our analytics
              provider to distinguish unique visitors and remember basic preferences (such as
              dark/light mode). You can block or delete cookies through your browser settings at
              any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This site is hosted on Vercel and uses PostHog for analytics. These providers may
              process data on our behalf in accordance with their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Your Choices</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You may use browser settings, extensions, or do-not-track signals to limit analytics
              collection. If you have questions about data collected about you, contact us using the
              details below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this policy from time to time. Changes will be reflected by updating the
              &quot;Last updated&quot; date above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-3">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Questions about this policy can be sent via the contact link on the{' '}
              <Link href="/" className="underline hover:text-black dark:hover:text-white">
                home page
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
