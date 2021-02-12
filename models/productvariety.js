'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductVariety extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductVariety.belongsTo(models.Product, {
        foreignKey: 'product_id',
        onDelete: 'CASCADE'
      })
    }
  };
  ProductVariety.init({
    size: DataTypes.INTEGER,
    color: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.NUMERIC,
    images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductVariety',
  });
  return ProductVariety;
};