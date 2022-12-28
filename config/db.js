const { Sequelize, Model, DataTypes } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env.DB)

sequelize.authenticate()
    .then(() => console.log("databaseConnected"))
    .catch((err) => console.log(err))

module.exports = {
    Sequelize,
    Model,
    DataTypes,
    sequelize
}