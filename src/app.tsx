import { type FC, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { COLUMNS, INITIAL_TASKS } from './data';
import { Column } from './column';
import { Task } from './types';
import './index.css';

const App: FC = () => <MainPage />;

const MainPage = () => {
	const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

	const handleDragEnd = (e: DragEndEvent) => {
		const { active, over } = e;

		if (!over) {
			return;
		}

		const taskId = active.id as string;
		const newStatus = over.id as Task['status'];

		setTasks(() =>
			tasks.map((task) =>
				task.id === taskId
					? {
							...task,
							status: newStatus,
						}
					: task,
			),
		);
	};

	return (
		<div className='p-4'>
			<div className='flex gap-8'>
				<DndContext onDragEnd={handleDragEnd}>
					{COLUMNS.map((column) => {
						return (
							<Column
								key={column.id}
								column={column}
								tasks={tasks.filter((task) => task.status === column.id)}
							/>
						);
					})}
				</DndContext>
			</div>
		</div>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
