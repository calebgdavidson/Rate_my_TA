const router = require('express').Router();
const { Post, User, Ta } = require('../models')
const { withAuth, hasAuth } = require('../utils/auth');


// 
router.get('/', async (req, res) => {
    console.log('HELLO');
  try {

    const postData = await Post.findAll({
      attributes: [
        'id',
        'ta_id',
        'post_text',
        'post_date',
        'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['name', 'id']
        },
        {
          model: Ta,
          attributes: ['id', 'ta_name', 'rate', 'post_id'],
        }
      ]
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    let formTitle = {
      title: 'Rate My TA'
    }

    console.log(posts);

    res.render('homepage', {
      formTitle,
      posts,
      logged_In: req.session.loggedIn,
    });
    // Insomnia test
    // res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', hasAuth, (req, res) => {
  let formTitle = {
    title: 'Login'
  }
  res.render('login', { formTitle });
});


router.get('/signup', (req, res) => {
  let formTitle = {
    title: 'Signup'
  }
  res.render('signup',{ formTitle });
});

router.get('/dashboard', (req, res) => {
  try {

    // const whatever = Post.findOne or Post.findByPk

    let formTitle = {
      title: 'Dashboard'
    }
    res.render('dash',{
      formTitle,
      logged_In: req.session.loggedIn
    });
    // Insomnia test
    // res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;