import { useDraggable } from '@dnd-kit/core';

import { Task } from './types';

type TaskCardProps = {
	task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: task.id,
	});

	const style = transform
		? {
				transform: `translate(${transform.x}px, ${transform.y}px)`,
			}
		: {
				borderLeft: `4px solid ${task.status === 'DONE' ? 'green' : task.status === 'IN_PROGRESS' ? 'orange' : 'gray'}`,
			};

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className='cursor-grab rounded-lg bg-white p-4 shadow-sm hover:shadow-md hover:bg-neutral-100 border-l-2 '
			style={style}
		>
			<h3 className='font-medium text-neutral-800'>{task.title}</h3>
			<p className='mt-2 text-sm text-neutral-600'>{task.description}</p>
		</div>
	);
};
