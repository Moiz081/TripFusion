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
      cityId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Cities',
          key: 'id',
          as: 'cityId'
        }
      },
      airportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'id',
          as: 'airportId'
        }
      },
      carName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      carNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      driverName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      driverNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      pickUpAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      destinationAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2
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