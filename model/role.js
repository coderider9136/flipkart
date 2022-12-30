const { role } = require("../schema/role")
const { permission } = require("../schema/permission")

const { Permit } = require("../schema/rolePermission")

async function add(param) {
    let roleData = await role.create({ name: param.name }).catch((err) => { return { error: err } })
    if (roleData.error || !roleData) {
        return { error: { status: 400, message: roleData.error.message || "cant create role" } }
    }

    for (let j in param.permissions) {
        let findpermission = await permission.findOne({ where: { id: param.permissions[j] } })
            .catch((err) => { return { error: err } })


        if (findpermission === null || findpermission.error || !findpermission) {
            return { error: { status: 400, message: "invalid permission" } }

        }
    }
    let rolePermission = [];

    for (let i in param.permissions) {

        rolePermission.push({
            "role_id": roleData.id,
            "permission": param.permissions[i]
        })
    }

    let permitData = await Permit.bulkCreate(rolePermission)
        .catch((err) => { return { error: err } })
    console.log(permitData)
    if (!permitData || permitData.error || permitData === null) {
        return { status: 400, message: permitData.error || "cant create roledata" }
    }


    return { data: [roleData, permitData] }
}

async function update(param1, param2) {
    let find = await User.findOne({ where: { id: param2 } }).catch((err) => { return { error: err } })
    if (!find || find.error) {
        return { error: { status: 400, message: find.error || "cant find" } }
    }
    let roleData = await role.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (roleData.error) {
        return { error: { status: 400, message: roleData.error.message || "cant update" } }
    }
    return { data: roleData }

}

async function remove(param1) {
    let find = await User.findOne({ where: { id: param1 } }).catch((err) => { return { error: err } })
    if (!find || find.error) {
        return { error: { status: 400, message: find.error || "cant find" } }
    }
    let roleData = await role.destroy({ where: { id: param1 } }).catch((err) => { return { error: err } })
    if (roleData.error) {
        return { error: { status: 400, message: roleData.error.message || "cant delete" } }
    }
    return { data: roleData }

}


module.exports = {

    add,
    get,
    update,
    remove
}