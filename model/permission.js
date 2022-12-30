const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")
const { User } = require("../schema/user")
const { permission } = require("../schema/permission")

async function add(param) {
    let permitData = await permission.create(param).catch((err) => { return { error: err } })
    if (permitData.error) {
        return { error: { status: 400, message: permitData.error.message } }
    }
    return { data: permitData }

}

async function get() {
    let permitData = await permission.findAll().catch((err) => { return { error: err } })
    if (permitData.error) {
        return { error: { status: 400, message: permitData.error.message } }
    }
    return { data: permitData }

}

async function update(param1, param2) {
    let find = await User.findOne({ where: { id: param2 } }).catch((err) => { return { error: err } })
    if (!find || find.error) {
        return { error: { status: 400, message: find.error || "cant find" } }
    }
    let permitData = await permission.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (permitData.error) {
        return { error: { status: 400, message: permitData.error.message || "cant update" } }
    }
    return { data: permitData }

}

async function remove(param1) {
    let find = await User.findOne({ where: { id: param1 } }).catch((err) => { return { error: err } })
    if (!find || find.error) {
        return { error: { status: 400, message: find.error || "cant find" } }
    }
    let permitData = await permission.destroy({ where: { id: param1 } }).catch((err) => { return { error: err } })
    if (permitData.error) {
        return { error: { status: 400, message: permitData.error.message || "cant delete" } }
    }
    return { data: permitData }

}
module.exports = {

    add,
    get,
    update,
    remove
}