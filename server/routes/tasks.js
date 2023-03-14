const Task = require('../models/tasks');
const router = require('express').Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// export the router
module.exports = router;
