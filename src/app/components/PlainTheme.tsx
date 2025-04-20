'use client';

import { profileData } from '@/app/lib/profileData';
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
          <h1 className="text-4xl font-bold mb-4">{profileData.name}</h1>
          <p className="text-xl text-gray-600">
            {profileData.title}
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{profileData.about}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-700">
                {profileData.skills.frontend.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Backend</h3>
              <ul className="list-disc list-inside text-gray-700">
                {profileData.skills.backend.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Databases</h3>
              <ul className="list-disc list-inside text-gray-700">
                {profileData.skills.databases.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Other</h3>
              <ul className="list-disc list-inside text-gray-700">
                {profileData.skills.other.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-8">
            {profileData.projects.map(project => (
              <div key={project.id} className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="space-y-2 text-gray-700">
            <p>Email: {profileData.contact.email}</p>
            <p>
              GitHub:{' '}
              <a
                href={profileData.contact.github}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profileData.contact.github.replace('https://', '')}
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href={profileData.contact.linkedin}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profileData.contact.linkedin.replace('https://', '')}
              </a>
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
} 