const api = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./userRoutes');
const commentRoutes = require('./userRoutes');
const { withAuth, hasAuth } = require('../../utils/auth');

api.use('/users', userRoutes);

module.exports = api;