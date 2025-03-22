import { useTerminalStore } from './store';
import { commandResponses } from './commandResponses';

const isFunction = (value: unknown): value is (command: string) => string => {
	return typeof value === 'function';
};

export const executeCommand = async (command: string): Promise<string> => {
	const { clearOutputs } = useTerminalStore.getState();
	const cmd = command.toLowerCase();
	
	switch (cmd) {
		case 'clear':
			clearOutputs();
			return '';
		case 'help':
		case 'about':
		case 'skills':
		case 'projects':
		case 'contact':
			const response = commandResponses[cmd as keyof typeof commandResponses];
			return isFunction(response) ? response(command) : response;
		default:
			if (cmd.startsWith('project')) {
				return commandResponses.project(command);
			}
			return commandResponses.notFound(command);
	}
};
