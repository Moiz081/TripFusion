'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Taxis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taxiId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      cityId: {
        type: Sequelize.INTEGER,
      },
      airportId: {
        type: Sequelize.INTEGER,
      },
      carName: {
        type: Sequelize.STRING
      },
      driverName: {
        type: Sequelize.STRING
      },
      driverNumber: {
        type: Sequelize.STRING
      },
      arrivalTime: {
        type: Sequelize.DATE
      },
      pickUpAddress: {
        type: Sequelize.STRING
      },
      destinationAddress: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Taxis');
  }
};