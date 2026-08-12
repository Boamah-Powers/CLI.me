'use client';

import { profileData } from '@/app/lib/profileData';
import { motion } from 'framer-motion';

export default function PlainTheme() {
  const sectionLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Music', href: '#music' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:flex-row md:px-8 lg:px-12">
        <aside className="md:sticky md:top-8 md:h-fit md:w-64 lg:w-72">
          <div className="rounded-none border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">{profileData.name}</h1>
              <p className="mt-2 text-sm text-gray-600">{profileData.title}</p>
            </div>

            <nav aria-label="Section navigation">
              <ul className="space-y-2 text-sm">
                {sectionLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-sm border border-transparent px-3 py-2 text-gray-700 transition-colors hover:border-gray-200 hover:bg-white hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <main className="flex-1 max-w-3xl">
          <header className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">Portfolio</p>
          </header>

          <section id="about" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{profileData.about}</p>
        </section>

        <section id="experience" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            {profileData.experiences.map(experience => (
              <div key={`${experience.title}-${experience.organization}`} className="border rounded-lg p-6 bg-gray-50">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">{experience.period}</p>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                  </div>
                  <p className="text-gray-700 font-medium">{experience.organization}</p>
                </div>
                <p className="text-gray-700 mb-4">{experience.summary}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {experience.highlights.slice(0, 2).map(highlight => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-12 scroll-mt-24">
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

        <section id="projects" className="mb-12 scroll-mt-24">
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

        <section id="music" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">Music</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {profileData.music.map(release => (
              <div key={release.id} className="border border-black bg-gray-100 p-4">
                <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                  <span>{release.type}</span>
                  <span>{release.year}</span>
                </div>
                <h3 className="text-xl font-bold uppercase">{release.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{release.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {release.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-white px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-700 border border-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
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
        </main>
      </div>
    </motion.div>
  );
}