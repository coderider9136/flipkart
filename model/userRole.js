const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")
const { User } = require("../schema/user")
const { role } = require("./role")
const { userRole } = require("../schema/userRole")


async function add(param) {
    let userRoleData = await User.findOne({ where: { id: param.user_id } })
        .catch((err) => { return { error: err } })
    if (!userRoleData || userRoleData.error || userRoleData === null) {
        let msg = (userRoleData.error) ? msg.error.message : "cants find user"
        return { error: { status: 400, message: msg } }
    }
    for (let j in param.role_id) {
        let findRole = await role.findOne({ where: { id: param.role_id[j] } }).catch((err) => { return false })
        if (findRole === null) {
            return { error: { status: 400, message: param.role_id[j] + "isnt valid role" } }
        }
    }

    let user = [];

    for (let i in param.role_id) {
        user.push({
            user_id: param.user_id,
            role_id: param.role_id[i]
        })
    }

    let userrole = await userRole.bulkCreate(user).catch((err) => { return { error: err } })
    if (userrole.error || userrole === null || !userrole) {
        return { error: { status: 400, message: userrole.error.message || "cant add user role" } }

    }
    return { data: userrole }
}

async function get() {
    let userrole = await userRole.findAll().catch((err) => { return { error: err } })
    if (userrole.error || !userrole) {
        return { error: { status: 400, message: userrole.error || "cant find user role" } }

    }
    return { data: userrole }
}
async function update(param1, param2) {
    let userrole = await userRole.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (!userrole || userrole.error) {
        return { error: { status: 400, message: userrole.error.message || "cant update user role" } }

    }
    return { data: userrole }
}
async function remove(param) {
    let userrole = await userRole.destroy({ where: { id: param } }).catch((err) => { return { error: err } })
    if (!userrole || userrole.error) {
        return { error: { status: 400, message: userrole.error.message || "cant update user role" } }

    }
    return { data: userrole }
}

module.exports = {
    add,
    get,
    update,
    remove
}