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
    taxiId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    cityId: {
      type:DataTypes.INTEGER,
    },
    userId: {
      type:DataTypes.INTEGER,
    },
    airportId: {
      type:DataTypes.INTEGER,
    },
    carName: {
      type: DataTypes.STRING
    },
    driverName: {
      type: DataTypes.STRING
    },
    driverNumber: {
      type: DataTypes.STRING
    },
    arrivalTime: {
      type: DataTypes.DATE
    },
    pickUpAddress: {
      type: DataTypes.STRING
    },
    destinationAddress: {
      type: DataTypes.STRING
    },
    totalSeats: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Taxi',
  });
  return Taxi;
};