export const profileData = {
  name: 'Kwaaku Boamah-Powers',
  title: 'Computer Science Student | Research Assistant | Software Engineer',
  about: `I’m a Computer Science graduate from NYU Abu Dhabi with minors in Applied Mathematics and Interactive Media.
I work as a Research Assistant in the Music and Sound Cultures (MaSC) Research Group, where I build machine learning and audio-processing systems for music notation and transcription.
My experience spans software engineering internships at Intuit and Buzz Mobility, full-stack product work, data engineering, and applied ML. I focus on building dependable systems that combine technical rigor, product thinking, and measurable impact.`,

  experiences: [
    {
      title: 'Research Assistant',
      organization: 'Music and Sound Cultures (MaSC) Research Group',
      period: 'Feb 2026 – Present',
      summary: 'Built ML systems for Carnatic music notation and percussion transcription in a research-driven product environment.',
      highlights: [
        'Improved autocomplete accuracy for a Carnatic music notation editor from 75.2% to 80.2% Top-1 by blending n-gram retrieval with a Transformer scorer and tuning the mix in a leakage-free 5-fold PyTorch sweep.',
        'Eliminated structurally invalid output from a TCN+CTC percussion transcription model by factorizing the vocabulary into dual CTC heads and adding a differentiable cycle-consistency loss.',
        'Deployed the autocomplete model as a Dockerized FastAPI service returning suggestions in 42 ms, consumed by a React/TypeScript editor gated on a 3-browser Playwright CI matrix.'
      ]
    },
    {
      title: 'Software Engineering Intern',
      organization: 'Intuit',
      period: 'May – August 2025',
      summary: 'Designed scalable data pipelines and cross-cloud migration systems for experimentation and analytics workflows.',
      highlights: [
        'Partnered directly with internal Data Science and Product stakeholders to establish high-fidelity data pipelines, replacing Salesforce full refreshes with incremental Python-based processing that cut export runtimes by 83% and import runtimes by 75%.',
        'Built automated Dataform models for experiment data processing with enhanced validation layers, driving a 10% increase in A/B testing accuracy across 5M+ daily records.',
        'Architected and executed a cross-cloud migration pipeline transferring 3 TB of data from AWS to BigQuery, reducing query latency by 62% and enabling scalable high-performance analysis over 20M+ production records.'
      ]
    },
    {
      title: 'Student Technician, Information Technology',
      organization: 'NYU Gallatin',
      period: 'Sep – Dec 2024',
      summary: 'Provided front-line IT support and infrastructure assistance across campus technology workflows.',
      highlights: [
        'Delivered Tier 1 IT support for faculty, staff, and students across Windows and macOS environments, troubleshooting hardware, software, printing, and AV issues.',
        'Managed and resolved technical support requests through NYU ServiceLink, documenting solutions and communicating status updates to users and IT leadership.',
        'Collaborated with senior IT staff on technology projects and infrastructure support initiatives as a key point of contact for walk-in and phone-based assistance.'
      ]
    },
    {
      title: 'Software Engineering Intern',
      organization: 'Buzz Mobility',
      period: 'Feb – Apr 2024',
      summary: 'Improved payment reliability and frontend performance in a fast-moving product team environment.',
      highlights: [
        'Integrated PayStack API with OAuth 2.0 and encryption protocols, improving transaction reliability by 8% and increasing daily transactions by 20%.',
        'Optimized critical frontend user flows using Webpack code-splitting, dynamic imports, and the Intersection Observer API for lazy loading, reducing initial page load times by 30%.',
        'Developed unit and integration tests using Jest and React Testing Library, increasing code coverage by 40% and reducing production bugs by 25%.'
      ]
    },
    {
      title: 'Teaching Assistant – Computer Programming for Engineers',
      organization: 'NYU Abu Dhabi',
      period: 'Sep – Dec 2023, Sep – Dec 2025',
      summary: 'Mentored engineering students in C++ and MATLAB while supporting practical lab-based learning.',
      highlights: [
        'Mentored first-year engineering students in C++ and MATLAB, providing technical guidance on programming fundamentals, algorithmic thinking, and software development best practices.',
        'Supported laboratory sessions and office hours by debugging code, troubleshooting programming challenges, and helping students translate theoretical concepts into working solutions.',
        'Evaluated quizzes and advised student project teams, delivering constructive feedback on code quality, program design, and problem-solving approaches.'
      ]
    },
    {
      title: 'Cybersecurity Analyst Intern',
      organization: 'Kwame Nkrumah University of Science and Technology',
      period: 'July – Aug 2023',
      summary: 'Automated vulnerability monitoring and strengthened security scanning across infrastructure.',
      highlights: [
        'Integrated Snyk security scanning into the CI/CD pipeline and conducted comprehensive vulnerability assessments, identifying and remediating 13 critical issues including SQL injection and XSS flaws.',
        'Deployed Nessus-based vulnerability scanning across 10 Debian servers, implementing weekly automated scans and remediation workflows that reduced security incidents by 20%.',
        'Supported proactive security improvements by identifying critical risks and helping operational teams reduce overall security risk.'
      ]
    },
    {
      title: 'Student Assistant',
      organization: 'NYU Abu Dhabi Arts Equipment Center',
      period: 'Sep 2022 – May 2026',
      summary: 'Supported media production operations, equipment management, and creative technical services.',
      highlights: [
        'Managed the checkout, return, testing, and maintenance of professional audio, video, lighting, and production equipment for students, faculty, and staff.',
        'Maintained equipment inventories and asset records through tagging, tracking, and organization processes, supporting efficient resource management.',
        'Supported training sessions, technical setup, and day-to-day operations for screening rooms, edit labs, lighting setups, and production spaces.'
      ]
    }
  ],

  skills: {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    backend: ['Node.js', 'Express.js', 'Python', 'FastAPI'],
    databases: ['PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'],
    other: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Airflow', 'Dataform', 'Docker', 'Git', 'Terraform']
  },

  music: [
    {
      id: 1,
      title: 'Studio Session I',
      type: 'Single',
      year: '2026',
      mood: 'ambient / experimental',
      description: 'A short-form release blending ambient textures, rhythmic experimentation, and field-recording influences.',
      tags: ['ambient', 'live', 'field recordings'],
      link: '#'
    },
    {
      id: 2,
      title: 'Late Signal',
      type: 'Demo',
      year: '2025',
      mood: 'minimal / electronic',
      description: 'Mid-tempo electronic material shaped by restrained percussion, tonal drift, and a focus on atmosphere.',
      tags: ['electronic', 'minimal', 'loop-based'],
      link: '#'
    },
    {
      id: 3,
      title: 'Unfolding',
      type: 'Live session',
      year: '2024',
      mood: 'organic / improvisational',
      description: 'An improvised live-session study exploring layered instrumentation, improvisation, and dynamic pacing.',
      tags: ['live', 'improv', 'organic'],
      link: '#'
    }
  ],

  projects: [
    {
      id: 1,
      name: 'AI Privacy Measurement & Payload Classifier',
      description: 'A distributed privacy auditing and script-analysis pipeline that evaluated tracking behavior across top-ranked domains.',
      tech: ['Python', 'OpenAI API', 'OpenWPM', 'Selenium', 'SQLite'],
      features: [
        'Automated web crawling across 100 top-ranked Tranco domains',
        'Semantic classification of suspicious payloads and tracking intent',
        'Detection of Canvas and Audio API fingerprinting behavior',
        'Privacy analysis pipeline for script and browser-state extraction'
      ],
      link: 'https://github.com/Boamah-Powers'
    },
    {
      id: 2,
      name: 'Job Scraper',
      description: 'A production-grade ETL pipeline for collecting and normalizing job data from distributed web sources.',
      tech: ['Airflow', 'SeleniumBase', 'Cloudinary', 'SQLAlchemy', 'PostgreSQL'],
      features: [
        'Bronze-Silver-Gold ETL architecture',
        'CAPTCHA mitigation and resilient scraping logic',
        'Idempotent database transactions and normalized schemas',
        'Automated exception handling and distributed ingestion'
      ],
      link: 'https://github.com/Boamah-Powers'
    },
    {
      id: 3,
      name: 'Real Estate App',
      description: 'A full-stack real estate platform with real-time chat, listing features, and secure user authentication.',
      tech: ['MongoDB', 'React', 'Node.js', 'Express.js', 'SCSS'],
      features: [
        'Real-time chat between agents and clients',
        'Property listings and browsing workflows',
        'JWT and bcrypt-based auth and session security',
        'Performance optimization for faster API and UI responses'
      ],
      link: 'https://github.com/Boamah-Powers/web-apps/tree/main/real-estate-app'
    }
  ],

  contact: {
    email: 'kb4242@nyu.edu',
    github: 'https://github.com/Boamah-Powers',
    linkedin: 'https://linkedin.com/in/kwaaku-boamah-powers/'
  }
};