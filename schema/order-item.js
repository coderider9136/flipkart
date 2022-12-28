const { INTEGER } = require("sequelize")
const { sequelize, Model, DataTypes, Sequelize } = require("../config/db")

class orderItem extends Model {};

orderItem.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    orderId: {
        type: DataTypes.INTEGER,
    },
    productId: {
        type: DataTypes.INTEGER
    },
    productQuentity: {
        type: INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    },
    discount: {
        type: DataTypes.INTEGER
    },
    totalPrice: {
        type: DataTypes.INTEGER
    },
}, {
    modelName: "Orderitem",
    tableName: "orderitem",
    sequelize
})

module.exports = { orderItem }