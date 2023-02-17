const api = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

api.use('/users', userRoutes);
api.use('/posts', postRoutes);

module.exports = api;