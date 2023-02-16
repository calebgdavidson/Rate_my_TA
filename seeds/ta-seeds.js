const { Ta } = require('../models');

const taData = [
  {
    ta_name: 'Walter Perry',
    rate: 4,
    post_id: 1,
  },
  {
    ta_name: 'Jason Vissage',
    rate: 4,
    post_id: 2,
  },
  {
    ta_name: `Bradley O'Dell`,
    rate: 4,
    post_id: 3,
  },
];

const seedTas = () => Ta.bulkCreate(taData);

module.exports = seedTas;