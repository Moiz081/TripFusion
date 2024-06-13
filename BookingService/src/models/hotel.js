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
    hotelId: {
      type: DataTypes.INTEGER,
    },
    cityId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cities',
        key: 'id',
        as: 'cityId'
      },
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      },
      allowNull: false
    },
    hotelName: {
      type: DataTypes.STRING
    },
    flat: {
      type: DataTypes.STRING
    },
    beds: {
      type: DataTypes.STRING
    },
    actualPrice: {
      type: DataTypes.INTEGER
    },
    discountPrice: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};