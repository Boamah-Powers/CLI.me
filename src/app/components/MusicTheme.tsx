'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/app/lib/profileData';

export default function MusicTheme() {
  const featured = profileData.music[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f3efe8] text-[#111111]"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
        <header className="mb-10 border-4 border-black bg-[#f9f6f0] p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em]">Kwaaku Boamah-Powers</p>
              <h1 className="mt-3 text-5xl font-black uppercase leading-none md:text-8xl">
                Build.
                <br />
                Write.
                <br />
                Release.
              </h1>
            </div>
            <div className="max-w-md border-4 border-black bg-[#ff5a36] p-4 text-sm font-bold uppercase tracking-wide">
              CS + music practice / research + sound work / personal releases
            </div>
          </div>
        </header>

        <section className="mb-10 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="border-4 border-black bg-black p-6 text-[#f5f1ea]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d9d4ce]">Featured release</p>
            <h2 className="text-3xl font-black uppercase md:text-5xl">{featured.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#d7d1c6]">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="border border-[#f5f1ea] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                {featured.type}
              </span>
              <span className="border border-[#f5f1ea] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                {featured.year}
              </span>
              <span className="border border-[#f5f1ea] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                {featured.mood}
              </span>
            </div>
          </div>

          <div className="flex min-h-[220px] flex-col justify-between border-4 border-black bg-[#f5f1ea] p-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/70">Now</p>
              <p className="mt-4 text-2xl font-black uppercase">Systemic sound</p>
            </div>
            <div className="mt-8 border-t-4 border-black pt-4 text-sm font-bold uppercase tracking-[0.18em]">
              Listen / archive / notes
            </div>
          </div>
        </section>

        <section className="mb-10 border-4 border-black bg-[#f9f6f0] p-4 md:p-6">
          <div className="mb-5 flex items-center justify-between gap-4 border-b-4 border-black pb-3">
            <h3 className="text-2xl font-black uppercase md:text-4xl">Recent work</h3>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Archive</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {profileData.music.map((release) => (
              <article
                key={release.id}
                className="group border-4 border-black bg-[#f3efe8] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between border-b-4 border-black bg-[#ffeb3b] px-3 py-2 text-[10px] font-black uppercase tracking-[0.25em]">
                  <span>{release.type}</span>
                  <span>{release.year}</span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/60">{release.mood}</p>
                  <h4 className="mt-3 text-2xl font-black uppercase leading-tight">{release.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{release.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {release.tags.map((tag) => (
                      <span key={tag} className="border border-black px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={release.link}
                    className="mt-6 inline-block border-2 border-black bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#f5f1ea] transition-colors hover:bg-[#ff5a36] hover:text-black"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Listen
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
