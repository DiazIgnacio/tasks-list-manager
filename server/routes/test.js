// when receiving a GET request to /test, this function will be called

// import the express router
const router = require('express').Router();

// define the route and the controller function to call
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// export the router
module.exports = router;
