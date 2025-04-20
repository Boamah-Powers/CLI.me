export const profileData = {
  name: 'Kwaaku Boamah-Powers',
  title: 'Software Engineer | Full-Stack Developer | Mobile Developer',
  about: `I'm a software engineer with a focus on full-stack web development, mobile app development, and cybersecurity.
With experience building real-time platforms using React, Node.js, and MongoDB, as well as cross-platform apps in Flutter,
I aim to create secure, efficient, and scalable solutions. I value clean code, strong security practices, and continuous learning.`,

  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python'],
    databases: ['PostgreSQL', 'MongoDB'],
    other: ['REST APIs', 'Git']
  },

  projects: [
    {
      id: 1,
      name: 'Real Estate App',
      description: 'A full-stack property management platform with real-time chat functionality.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      features: [
        'Real-time chat between agents and clients',
        'Property listing and search',
        'User authentication and authorization',
        'Responsive design for all devices'
      ],
      link: 'https://github.com/Boamah-Powers/web-apps/tree/main/real-estate-app'
    },
    {
      id: 2,
      name: 'Expense Tracker',
      description: 'A cross-platform mobile app for tracking expenses and providing financial insights.',
      tech: ['Flutter', 'Firebase', 'Provider', 'Charts'],
      features: [
        'Expense categorization and tracking',
        'Financial analytics and charts',
        'Budget planning and alerts',
        'Cloud sync across devices'
      ],
      link: 'https://github.com/Boamah-Powers/flutter-apps/tree/main/expense_tracker'
    }
  ],

  contact: {
    email: 'kb4242@nyu.edu',
    github: 'https://github.com/boamah-powers',
    linkedin: 'https://linkedin.com/in/kwaaku-boamah-powers/'
  }
};