const connection = require('../database/connection');
const {DataTypes} = require('sequelize');


const Category = connection.define("Category", {
name: {
    type: DataTypes.STRING(255),
    allowNull: false
},
slug: {
    type: DataTypes.STRING(255),
    allowNull: false
}
});

module.exports = Category;