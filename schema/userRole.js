const { sequelize, Sequelize, Model, DataTypes } = require("../config/db")
class userRole extends Model {};

userRole.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        role_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    }, {
        modelName: "userRole",
        tableName: "user_role",
        sequelize
    })
    //userRole.sync({ force: true })

module.exports = { userRole }