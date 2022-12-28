const { Sequelize, Model, DataTypes } = require("sequelize")

const sequelize = new Sequelize("mysql:root@localhost/flipkart")

sequelize.authenticate()
    .then(() => console.log("databaseConnected"))
    .catch((err) => console.log(err))

module.exports = {
    Sequelize,
    Model,
    DataTypes,
    sequelize
}