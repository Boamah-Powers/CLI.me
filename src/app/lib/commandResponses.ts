const projectDetails = {
  1: {
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
  2: {
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
};

export const commandResponses = {
  help: `Available commands:
- help: Show this help message
- clear: Clear the terminal screen
- about: Learn more about me
- skills: View my technical skills
- projects: See my projects
- project <number>: Get details about a specific project
- contact: Get my contact information`,

about: `I'm Kwaaku Boamah-Powers, a software engineer with a focus on full-stack web development, mobile app development, and cybersecurity.
With experience building real-time platforms using React, Node.js, and MongoDB, as well as cross-platform apps in Flutter, I aim to create secure, efficient, and scalable solutions.
I value clean code, strong security practices, and continuous learning—whether it's optimizing systems, contributing to impactful projects, or exploring new tech.`,

  skills: `Technical Skills:
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, Python
- Databases: PostgreSQL, MongoDB
- Tools: Git
- Other: REST APIs`,

  projects: `Projects:
1. Real Estate App - Full-stack property management platform with real-time chat (React, Node.js, MongoDB)
2. Expense Tracker - Cross-platform mobile app for tracking expenses and financial insights (Flutter, Firebase)

Type 'project <number>' to learn more about a specific project.`,

  project: (command: string) => {
    const match = command.match(/project\s+(\d+)/i);
    if (!match) return 'Please specify a project number. Usage: project <number>';
    
    const projectNumber = parseInt(match[1]);
    const project = projectDetails[projectNumber as keyof typeof projectDetails];
    
    if (!project) return 'Project not found. Type "projects" to see available projects.';
    
    return `${project.name}
${project.description}

Technologies: ${project.tech.join(', ')}

Key Features:
${project.features.map(f => `- ${f}`).join('\n')}

GitHub: ${project.link}`;
  },

  contact: `You can reach me at:
- Email: kb4242@nyu.edu
- GitHub: https://github.com/boamah-powers
- LinkedIn: https://linkedin.com/in/kwaaku-boamah-powers/`,

  notFound: (command: string) => `Command not found: ${command}. Type 'help' to see available commands.`
} as const; 