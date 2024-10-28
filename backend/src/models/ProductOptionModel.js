const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const ProductOptionModel = connection.define("ProductOptionModel", {
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
    title: STRING(20),
    shape: ENUM,
    radius:  {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        allowNull: false
    },
    type: ENUM,
    values: STRING(255)
}, {
    tableName: 'product_option'
});

module.exports = ProductOptionModel;

