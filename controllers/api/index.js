const api = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./userRoutes');
const { withAuth, hasAuth } = require('../../utils/auth');

api.use('/users', userRoutes);
api.use('/posts', postRoutes);

module.exports = api;