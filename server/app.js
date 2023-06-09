require('dotenv').config();

const seedDB = require('./seeds/taskSeeder');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected');
    seedDB();
  })
  .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/test', require('./routes/test'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/login', require('./routes/login'));
app.use('/api/signup', require('./routes/signup'));
app.use('/api/users', require('./routes/users'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
