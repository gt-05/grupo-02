const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const ProductModel = connection.define("ProductModel", {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: null
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: DataTypes.TEXT,
    price_with_discount: DataTypes.DECIMAL(5, 2),
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        allowNull: false
    }
}, {
    tableName: "product"
});

module.exports = ProductModel;