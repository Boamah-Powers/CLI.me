'use client';

import { motion } from 'framer-motion';

export default function PlainTheme() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900 p-8"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Kwaaku Boamah-Powers</h1>
          <p className="text-xl text-gray-600">
            Software Engineer | Full-Stack Developer | Mobile Developer
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a software engineer with a focus on full-stack web development, mobile app development, and cybersecurity.
            With experience building real-time platforms using React, Node.js, and MongoDB, as well as cross-platform apps in Flutter,
            I aim to create secure, efficient, and scalable solutions. I value clean code, strong security practices, and continuous learning.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Backend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Databases</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Other</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>REST APIs</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Real Estate App</h3>
              <p className="text-gray-700 mb-4">
                A full-stack property management platform with real-time chat functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Socket.io</span>
              </div>
              <a
                href="https://github.com/Boamah-Powers/web-apps/tree/main/real-estate-app"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Expense Tracker</h3>
              <p className="text-gray-700 mb-4">
                A cross-platform mobile app for tracking expenses and providing financial insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Provider</span>
              </div>
              <a
                href="https://github.com/Boamah-Powers/flutter-apps/tree/main/expense_tracker"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="space-y-2 text-gray-700">
            <p>Email: kb4242@nyu.edu</p>
            <p>
              GitHub:{' '}
              <a
                href="https://github.com/boamah-powers"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/boamah-powers
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/kwaaku-boamah-powers/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kwaaku-boamah-powers/
              </a>
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
} 