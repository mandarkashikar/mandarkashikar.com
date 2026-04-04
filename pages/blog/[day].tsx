import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';

interface Quiz {
  type: string;
  question: string;
  options?: string[];
  correct?: number;
}

interface Lesson {
  day: number;
  date: string;
  title: string;
  readingTime: number;
  concept: string[];
  whyItMatters: string[];
  quiz: Quiz[];
  answers: {
    mcq?: string[];
    [key: string]: any;
  };
}

interface LessonsData {
  lessons: Lesson[];
}

interface Props {
  lesson: Lesson;
  allLessons: Lesson[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'agentic-commerce-lessons.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: LessonsData = JSON.parse(fileContents);

  const paths = data.lessons.map((lesson) => ({
    params: { day: lesson.day.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'agentic-commerce-lessons.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: LessonsData = JSON.parse(fileContents);

  const lesson = data.lessons.find((l) => l.day === parseInt(params?.day as string));

  if (!lesson) {
    return { notFound: true };
  }

  return {
    props: {
      lesson,
      allLessons: data.lessons,
    },
    revalidate: 3600,
  };
};

export default function BlogLesson({ lesson, allLessons }: Props) {
  const router = useRouter();
  const [expandedAnswers, setExpandedAnswers] = useState<number[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    lesson ? new Array(lesson.quiz.length).fill(null) : []
  );

  if (router.isFallback || !lesson) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mx-auto mb-4 animate-pulse"></div>
          <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  const currentIndex = allLessons.findIndex((l) => l.day === lesson.day);
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const toggleAnswer = (index: number) => {
    setExpandedAnswers((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const selectMcqAnswer = (quizIndex: number, optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[quizIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const getMcqAnswers = () => {
    const mcqAnswers: string[] = [];
    let mcqCount = 0;
    for (let i = 0; i < lesson.quiz.length; i++) {
      if (lesson.quiz[i].type === 'mcq') {
        if (lesson.answers.mcq && lesson.answers.mcq[mcqCount]) {
          mcqAnswers.push(lesson.answers.mcq[mcqCount]);
        }
        mcqCount++;
      }
    }
    return mcqAnswers;
  };

  const shortAnswers = lesson.answers
    ? Object.keys(lesson.answers)
        .filter((key) => key !== 'mcq')
        .map((key) => lesson.answers[key])
    : [];

  return (
    <>
      <Head>
        <title>{`Day ${lesson.day}/90: ${lesson.title}`} — Decoding Agentic Commerce</title>
        <meta
          name="description"
          content={`${lesson.title} — a lesson from the 90-day Decoding Agentic Commerce learning program`}
        />
      </Head>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-3xl px-6 py-8">
            <Link
              href="/blog"
              className="mb-8 inline-block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              ← All lessons
            </Link>
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-500">
                Day {lesson.day} of 90
              </span>
            </div>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">{lesson.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <time dateTime={lesson.date}>
                {new Date(lesson.date).toLocaleDateString()}
              </time>
              <span>{lesson.readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-3xl px-6 py-12">
          {/* Concept Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Key Concepts</h2>
            <ul className="space-y-4">
              {lesson.concept.map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why It Matters Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Why It Matters for PMs
            </h2>
            <div className="space-y-4">
              {lesson.whyItMatters.map((reason, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: reason
                        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                        .replace(/\n/g, '<br />'),
                    }}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Quiz Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Test Your Understanding
            </h2>
            <div className="space-y-8">
              {lesson.quiz.map((question, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg p-6"
                >
                  <div className="mb-4">
                    <p className="font-semibold text-black dark:text-white mb-2">
                      {question.type === 'mcq'
                        ? `Question ${idx + 1} (Multiple Choice)`
                        : `Question ${idx + 1} (Short Answer)`}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{question.question}</p>
                  </div>

                  {question.type === 'mcq' && question.options ? (
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optIdx) => (
                        <label
                          key={optIdx}
                          className="flex items-start gap-3 p-3 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 cursor-pointer transition-colors"
                        >
                          <input
                            type="radio"
                            name={`question-${idx}`}
                            value={optIdx}
                            checked={selectedAnswers[idx] === optIdx}
                            onChange={() => selectMcqAnswer(idx, optIdx)}
                            className="mt-1"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400">
                      Think about your answer before revealing the explanation.
                    </div>
                  )}

                  <button
                    onClick={() => toggleAnswer(idx)}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    {expandedAnswers.includes(idx) ? '− Hide' : '+ Show'} Answer
                  </button>

                  {expandedAnswers.includes(idx) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {question.type === 'mcq'
                          ? getMcqAnswers()[
                              lesson.quiz.slice(0, idx).filter((q) => q.type === 'mcq').length
                            ]
                          : shortAnswers[
                              lesson.quiz.slice(0, idx).filter((q) => q.type === 'short-answer').length
                            ]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className="flex gap-4 justify-between pt-12 border-t border-gray-200 dark:border-gray-800">
            {previousLesson ? (
              <Link
                href={`/blog/${previousLesson.day}`}
                className="flex-1 px-4 py-3 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors text-center"
              >
                <div className="text-xs text-gray-500 dark:text-gray-500">Previous</div>
                <div className="font-semibold text-black dark:text-white">Day {previousLesson.day}</div>
              </Link>
            ) : (
              <div />
            )}
            {nextLesson ? (
              <Link
                href={`/blog/${nextLesson.day}`}
                className="flex-1 px-4 py-3 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors text-center"
              >
                <div className="text-xs text-gray-500 dark:text-gray-500">Next</div>
                <div className="font-semibold text-black dark:text-white">Day {nextLesson.day}</div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>
      </div>
    </>
  );
}
