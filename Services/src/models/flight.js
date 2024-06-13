'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    airplaneId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cityId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalAirportId:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalCityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departureCityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalAirportName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departureAirportName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTime:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    departureTime:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    price:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    boardingGate: DataTypes.STRING,
    totalSeats:  {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};