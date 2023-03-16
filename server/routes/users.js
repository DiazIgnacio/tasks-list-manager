const User = require('../models/user');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.patch('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  const { email, password } = req.body;

  try {
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    if (user.email !== email) {
      // Check if another User already has that email
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ message: 'Email already exists' });
      }
    }

    await user.updateOne({
      email,
      password,
      isNewPassword: user.password !== password,
    });

    return res.status(201).json({ message: 'User updated' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// export the router
module.exports = router;
