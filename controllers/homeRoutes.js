const router = require('express').Router();
// require model
const { withAuth, hasAuth } = require('../utils/auth');


// 
router.get('/', async (req, res) => {
    console.log('HELLO');
//   try {

    // const postData = await Post.findAll({
    //   attributes: [
    //     'id',
    //     'title',
    //     'post_text',
    //     'post_date',
    //     'poster_id'
    //   ],
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name']
    //     },
    //     {
    //       model: Comment,
    //       attributes: ['id', 'post_id', 'comment_text', 'commenter_id', 'comment_date'],
    //       include: [
    //         {
    //           model: User,
    //           attributes: ['name']
    //         }
    //       ]
    //     }
    //   ]
    // });

    // const posts = postData.map((project) => project.get({ plain: true }));

    // console.log('GET',posts);

    res.render('homepage', {
    //   posts,
    //   logged_In: req.session.loggedIn,
    });
    // res.status(200).json(posts[0]);
//   } catch (err) {
//     res.status(500).json(err);
//   }
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



module.exports = router;