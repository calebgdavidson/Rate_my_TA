const { Post } = require('../models');

const postData = [
  {
    post_text: 'Is great.  Just a bunch of bipety blah word here to fill the gap.',
    user_id: 1,
    ta_id: 1
  },
  {
    post_text: 'Good. And again just another bunch of text to fill in the space to create a comment.',
    user_id: 2,
    ta_id: 2
  },
  {
    post_text: 'Awesome.  We just get into the breakout room and talk it over with everyone at the same time.  Usually someone always shares.',
    user_id: 3,
    ta_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;