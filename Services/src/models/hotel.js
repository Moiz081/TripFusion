'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotel.init({
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hotelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    beds: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actualPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discountPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};