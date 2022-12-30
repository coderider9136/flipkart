const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class pay extends Model {};

pay.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [
                    ["cod", "upi", "online", "card"]
                ]
            }
        }
    },
    paymentPartner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    },
    paymentDetails: {
        type: DataTypes.JSON
    }
}, {
    modelName: "pay",
    tableName: "payment",
    sequelize
})

module.exports = {
    pay
}