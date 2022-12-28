const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class User extends Model {};

User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "guest"
        },
        emailId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        checkPassword: {
            type: DataTypes.STRING,
            allowNull: false,

        }
    }, {
        modelName: "User",
        tableName: "UserTable",
        sequelize,
        updatedAt: false
    })
    //User.sync({ force: true })
module.exports = { User }