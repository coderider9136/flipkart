const { INTEGER } = require("sequelize")
const { sequelize, Sequelize, Model, DataTypes } = require("../config/db")

class Order extends Model {};

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER
    },
    totalProduct: {
        type: DataTypes.INTEGER
    },
    productQuentity: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    },
    discount: {
        type: INTEGER
    },
    totalAmount: {
        type: INTEGER
    },
    shippingDetails: {
        type: DataTypes.STRING
    },
    orderStatus: {
        type: DataTypes.BOOLEAN
    },
    paymentStatus: {
        type: DataTypes.BOOLEAN
    },
    deliveryStatus: {
        type: DataTypes.BOOLEAN
    },
    remark: {
        type: DataTypes.STRING
    },
    updatedby: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: "Order",
    tableName: "order",
    sequelize
})

module.exports = { Order }