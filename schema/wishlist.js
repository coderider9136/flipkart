const { sequelize, Sequelize, Model, DataTypes } = require("../config/db")

class wishlist extends Model {};

wishlist.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productId: {
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: "wishList",
    tableName: "wishlist",
    sequelize
})


module.exports = { wishlist }