const { sequelize, Sequelize, Model, DataTypes } = require("../config/db")

class address extends Model {};

address.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

})