const Task = require('../models/tasks');
const User = require('../models/user');
const router = require('express').Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { assignedTo = '' } = req.body;
  const task = new Task(req.body);
  await task.save();

  await User.findOneAndUpdate(
    { email: assignedTo },
    { $push: { tasks: task._id } }
  );

  res.json(task);
});

// export the router
module.exports = router;
