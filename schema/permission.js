const { sequelize, Sequelize, Model, DataTypes } = require("../config/db")


class permission extends Model {};
permission.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        modelName: "permission",
        tableName: "permission",
        sequelize
    })
    //permission.sync({ force: true })

module.exports = {
    permission
}