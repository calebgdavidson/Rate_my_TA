const User = require('./User');
const Post = require('./Post');
const Ta = require('./Ta');


Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.hasOne(Ta, {
    foreignKey: 'post_id',
})

Ta.belongsTo(Post, {
    foreignKey: 'post_id',
});


module.exports = {
    User,
    Post,
    Ta
};