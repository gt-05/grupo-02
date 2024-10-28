const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const ProductCategory = connection.define("ProductCategory", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: "product"
            },
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: "product"
            },
            key: 'id'
        }
    }
});

module.exports = ProductCategory;