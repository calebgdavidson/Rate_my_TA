const router = require('express').Router();
const { Post, User, Ta } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
          'id',
          'ta_id',
          'post_text',
          'post_date',
          'user_id'],
        include: [
          {
            model: Ta,
            attributes: ['id', 'ta_name', 'post_id', 'rate', ],
          },
          {
            model: User,
            attributes: ['name', 'id']
          }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'ta_id',
            'post_text',
            'post_date',
            'user_id'
        ],
        include: [
            {
                model: Ta,
                attributes: ['id', 'ta_name', 'post_id', 'rate', ],
              },
              {
                model: User,
                attributes: ['name', 'id']
              }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.post('/', (req, res) => {
    Post.create({
        ta_id: req.body.ta_id,
        post_text: req.body.post_text,
        post_date: req.body.post_date,
        user_id: req.body.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// router.put('/:id', withAuth, (req, res) => {

// });

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });



});

module.exports = router;