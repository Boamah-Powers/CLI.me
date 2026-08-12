import { profileData } from "@/app/lib/profileData";

export const commandResponses = {
	help: `Available commands:
- help: Show this help message
- clear: Clear the terminal screen
- about: Learn more about me
- experience: See a summary of my work history
- experience <number>: View one role in detail
- skills: View my technical skills
- projects: See my projects
- project <number> [-v]: Get details about a specific project (use -v to open GitHub link)
- contact: Get my contact information`,

	about: profileData.about,

	experience: (command: string) => {
		const match = command.match(/experience\s+(\d+)/i);
		if (match) {
			const index = parseInt(match[1], 10) - 1;
			const experience = profileData.experiences[index];
			if (!experience) {
				return 'Experience not found. Type "experience" to see available roles.';
			}

			return `${experience.title} | ${experience.organization}\n${experience.period}\n\n${experience.summary}\n\nHighlights:\n${experience.highlights.map((item) => `- ${item}`).join("\n")}`;
		}

		return `Experience:\n${profileData.experiences
			.map(
				(exp, index) =>
					`${index + 1}. ${exp.title} | ${exp.organization} (${exp.period})\n   ${exp.summary}`
			)
			.join("\n\n")}\n\nType 'experience <number>' to view one role in detail.`;
	},

	skills: `Technical Skills:
- Frontend: ${profileData.skills.frontend.join(", ")}
- Backend: ${profileData.skills.backend.join(", ")}
- Databases: ${profileData.skills.databases.join(", ")}
- Tools: ${profileData.skills.other.join(", ")}`,

	projects:
		`Projects:\n` +
		profileData.projects
			.map(
				(p, i) =>
					`${i + 1}. ${p.name} - ${
						p.description.split(".")[0]
					} (${p.tech.slice(0, 3).join(", ")})`
			)
			.join("\n") +
		`\n\nType 'project <number>' to learn more about a specific project.`,

	project: (command: string) => {
		const match = command.match(/project\s+(\d+)(?:\s+-v)?/i);
		if (!match)
			return "Please specify a project number. Usage: project <number> [-v]";

		const project = profileData.projects.find(
			(p) => p.id === parseInt(match[1])
		);
		if (!project)
			return 'Project not found. Type "projects" to see available projects.';

		const shouldOpenLink = command.includes("-v");
		if (shouldOpenLink) {
			window.open(project.link, "_blank");
		}

		return `${project.name}\n${project.description}\n\nTechnologies: ${project.tech.join(", ")}\n\nKey Features:\n${project.features.map((f) => `- ${f}`).join("\n")}\n\nType 'project ${project.id} -v' to open the GitHub repository.`;},

	contact: `You can reach me at:
- Email: ${profileData.contact.email}
- GitHub: ${profileData.contact.github}
- LinkedIn: ${profileData.contact.linkedin}`,

	notFound: (command: string) =>
		`Command not found: ${command}. Type 'help' to see available commands.`,
} as const;
