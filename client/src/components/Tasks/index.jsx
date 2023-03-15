import React from 'react';
import useTasks from '../../hooks/useTasks';

const Tasks = () => {
  const tasks = useTasks();

  return (
    <>
      <h1 className="text-4xl font-bold">Tasks</h1>
      <ul className="grid grid-cols-3 gap-10 mt-12">
        {tasks &&
          tasks.map(task => (
            <li key={task.id}>
              <h2 className="text-xl font-bold">{task.title}</h2>
              <p>{task.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

const dummyTasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Description 4',
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'Description 5',
  },
  {
    id: 6,
    title: 'Task 6',
    description: 'Description 6',
  },
  {
    id: 7,
    title: 'Task 7',
    description: 'Description 7',
  },
  {
    id: 8,
    title: 'Task 8',
    description: 'Description 8',
  },
  {
    id: 9,
    title: 'Task 9',
    description: 'Description 9',
  },
];

export default Tasks;
