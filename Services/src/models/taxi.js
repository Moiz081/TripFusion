'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taxi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Taxi.init({
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    airportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    carNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    driverName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    driverNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pickUpAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destinationAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Taxi',
  });
  return Taxi;
};