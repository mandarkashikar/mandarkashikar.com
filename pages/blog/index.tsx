import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface Lesson {
  day: number;
  date: string;
  title: string;
  readingTime: number;
}

export default function BlogIndex() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    fetch('/data/agentic-commerce-lessons.json')
      .then((res) => res.json())
      .then((data) => {
        setLessons(data.lessons);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Decoding Agentic Commerce — A 90-Day Learning Program</title>
        <meta name="description" content="A structured 90-day learning program exploring agentic commerce, AI-powered shopping, and product management strategies." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-4xl px-6 py-8">
            <Link href="/" className="mb-8 inline-block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-2">Decoding Agentic Commerce</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">A 90-day learning program for product managers</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-12">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Join this structured learning journey into agentic commerce. From basics to advanced orchestration, explore how AI agents are transforming e-commerce for SMBs.
            </p>
          </div>

          {/* Lessons Grid */}
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.day}
                href={`/blog/${lesson.day}`}
                className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:bg-gray-50 dark:hover:bg-gray-900/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-500">Day {lesson.day}/90</span>
                      <h3 className="text-lg font-semibold text-black dark:text-white">{lesson.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={lesson.date}>{new Date(lesson.date).toLocaleDateString()}</time>
                      <span>{lesson.readingTime} min read</span>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-400 dark:text-gray-600">→</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Progress */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {lessons.length} of 90 lessons. New lessons published daily at 3 PM ET.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
