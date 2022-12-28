const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")

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
async function add(param) {
    let permitData = await permission.create(param).catch((err) => { return { error: err } })
    if (permitData.error) {
        return { error: { status: 400, message: permitData.error.message } }
    }
    return { data: permitData }

}

module.exports = {
    permission,
    add,
}