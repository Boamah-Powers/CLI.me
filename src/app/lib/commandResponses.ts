import { profileData } from '@/app/lib/profileData';

export const commandResponses = {
  help: `Available commands:
- help: Show this help message
- clear: Clear the terminal screen
- about: Learn more about me
- skills: View my technical skills
- projects: See my projects
- project <number>: Get details about a specific project
- contact: Get my contact information`,

  about: profileData.about,

  skills: `Technical Skills:
- Frontend: ${profileData.skills.frontend.join(', ')}
- Backend: ${profileData.skills.backend.join(', ')}
- Databases: ${profileData.skills.databases.join(', ')}
- Tools: ${profileData.skills.other.join(', ')}`,

  projects: `Projects:\n` +
    profileData.projects.map(
      (p, i) => `${i + 1}. ${p.name} - ${p.description.split('.')[0]} (${p.tech.slice(0, 3).join(', ')})`
    ).join('\n') + `\n\nType 'project <number>' to learn more about a specific project.`,

  project: (command: string) => {
    const match = command.match(/project\s+(\d+)/i);
    if (!match) return 'Please specify a project number. Usage: project <number>';

    const project = profileData.projects.find(p => p.id === parseInt(match[1]));
    if (!project) return 'Project not found. Type "projects" to see available projects.';

    return `${project.name}
${project.description}

Technologies: ${project.tech.join(', ')}

Key Features:
${project.features.map(f => `- ${f}`).join('\n')}

GitHub: ${project.link}`;
  },

  contact: `You can reach me at:
- Email: ${profileData.contact.email}
- GitHub: ${profileData.contact.github}
- LinkedIn: ${profileData.contact.linkedin}`,

  notFound: (command: string) => `Command not found: ${command}. Type 'help' to see available commands.`
} as const;
