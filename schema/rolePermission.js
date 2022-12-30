const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")

class Permit extends Model {};

Permit.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role_id: {
        type: DataTypes.INTEGER
    },
    permission: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: "Permit",
    tableName: "role-permission",
    sequelize
})

//Permit.sync({ force: true })

module.exports = { Permit }