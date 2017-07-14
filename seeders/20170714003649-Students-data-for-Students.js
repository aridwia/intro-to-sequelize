'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Ari',
      last_name: 'Dwi',
      email: 'ar@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Yoga',
      last_name: 'Pratama',
      email: 'yoga@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Resti',
      last_name: 'Nurul',
      email: 'resti@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
   )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulk('Students',null,{})
  }
};
