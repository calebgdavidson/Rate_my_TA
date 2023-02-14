const router = require('express').Router();
// require user model
const { withAuth, hasAuth } = require('../../utils/auth');

// CREATE new user
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      // Pass back session true for redirect in signup.js
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Login
router.post('/login', async (req, res) => {  
    try {
      const dbUserData = await User.findOne({
        where: {
          name: req.body.userLogin,
        },
      });
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
      // check given and internal password against one another
      const validPassword = await dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {      
        req.session.loggedIn = true;
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Logout
router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;