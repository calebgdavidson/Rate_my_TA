const { User } = require('../models');

const userData = [
  {
    name: 'Xandromus',
    password: 'spac3t1m3'
  },
  {
    name: 'Lemantino',
    password: 'lun4rl4nd1ng'
  },
  {
    name: 'taqtics',
    password: '34zpz##'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;