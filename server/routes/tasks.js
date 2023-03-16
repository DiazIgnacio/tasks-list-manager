const Task = require('../models/tasks');
const User = require('../models/user');
const router = require('express').Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find({});
  const taskWithoutPrivateId = tasks.map(task => {
    const { _id, ...taskWithoutId } = task._doc;
    return { id: _id, ...taskWithoutId };
  });
  res.json(taskWithoutPrivateId);
});

router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  const { _id, ...taskWithoutId } = task._doc;
  res.json({ id: _id, ...taskWithoutId });
});

router.put('/:id', async (req, res) => {
  const { assignedTo = '' } = req.body;
  const task = await Task.findById(req.params.id);
  const { assignedTo: oldAssignedTo } = task;

  if (assignedTo !== oldAssignedTo) {
    await User.findOneAndUpdate(
      { email: oldAssignedTo },
      { $pull: { tasks: task._id } }
    );
  }

  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
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
