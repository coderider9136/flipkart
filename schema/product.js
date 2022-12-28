const { Sequelize, Model, DataTypes, sequelize } = require("../config/db")
const { QueryTypes } = require('sequelize');
class pro extends Model {};

pro.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    added_by: {
        type: DataTypes.INTEGER,

    },
    category: {
        type: DataTypes.INTEGER
    },
    prize: {
        type: DataTypes.INTEGER
    },
    productUrl: {
        type: DataTypes.STRING
    },
    reviews: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    }

}, {
    modelName: "pro",
    tableName: "product",
    sequelize
})

module.exports = { pro }