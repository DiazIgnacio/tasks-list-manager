const Task = require('../models/tasks');

const tasks = [
  {
    title: 'Task 1',
    description: 'This is the description for Task 1.',
    assignedTo: 'admin@admin.com',
    dueDate: new Date('2023-04-01'),
    isCompleted: false,
  },
  {
    title: 'Task 2',
    description: 'This is the description for Task 2.',
    assignedTo: 'admin@admin.com',
    dueDate: new Date('2023-04-15'),
    isCompleted: false,
  },
  {
    title: 'Task 3',
    description: 'This is the description for Task 3.',
    assignedTo: 'admin@admin.com',
    dueDate: null,
    isCompleted: true,
  },
  {
    title: 'Task 4',
    description: 'This is the description for Task 4.',
    assignedTo: 'diaz.ignacio023@gmail.com',
    dueDate: new Date('2023-03-30'),
    isCompleted: false,
  },
  {
    title: 'Task 5',
    description: 'This is the description for Task 5.',
    assignedTo: 'diaz.ignacio023@gmail.com',
    dueDate: new Date('2023-04-10'),
    isCompleted: false,
  },
  {
    title: 'Task 6',
    description: 'This is the description for Task 6.',
    assignedTo: 'diaz.ignacio023@gmail.com',
    dueDate: new Date('2023-05-01'),
    isCompleted: false,
  },
  {
    title: 'Task 7',
    description: 'This is the description for Task 7.',
    assignedTo: 'test@test.com',
    dueDate: null,
    isCompleted: false,
  },
  {
    title: 'Task 8',
    description: 'This is the description for Task 8.',
    assignedTo: 'test@test.com',
    dueDate: new Date('2023-03-28'),
    isCompleted: true,
  },
  {
    title: 'Task 9',
    description: 'This is the description for Task 9.',
    assignedTo: 'test@test.com',
    dueDate: new Date('2023-04-15'),
    isCompleted: false,
  },
];

const seedDB = async () => {
  try {
    await Task.deleteMany({});
    console.log('Deleted all tasks.');

    await Task.insertMany(tasks);
    console.log('Seeded tasks successfully.');
  } catch (err) {
    console.error(err);
  }
};

module.exports = seedDB;
