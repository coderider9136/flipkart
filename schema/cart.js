const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")


class cart extends Model {};

cart.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER
    },
    quentity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    price: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: "cart",
    tableName: "cart",
    sequelize
})

module.exports = { cart }