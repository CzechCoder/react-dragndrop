import { Column, Task } from './types';

export const COLUMNS: Column[] = [
	{ id: 'TODO', title: 'TO DO' },
	{ id: 'IN_PROGRESS', title: 'IN PROGRESS' },
	{ id: 'DONE', title: 'DONE' },
];

export const INITIAL_TASKS: Task[] = [
	{
		id: '1',
		title: 'Research Project',
		description: 'Gather requirements and create initial documentation',
		status: 'TODO',
	},
	{
		id: '2',
		title: 'Design System',
		description: 'Create component library and design tokens',
		status: 'TODO',
	},
	{
		id: '3',
		title: 'API Integration',
		description: 'Implement REST API endpoints',
		status: 'IN_PROGRESS',
	},
	{
		id: '4',
		title: 'Testing',
		description: 'Write unit tests for core functionality',
		status: 'DONE',
	},
];
