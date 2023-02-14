const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'poster_id',
});

User.hasMany(Post, {
    foreignKey: 'poster_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'commenter_id',
});

Comment.belongsTo(Post, {
    foreignKey:  'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
});

module.exports = {
    User,
    Post,
    Comment
};