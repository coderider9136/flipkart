const { response, request } = require("express")
const jwt = require("jsonwebtoken")
const { QueryTypes } = require("sequelize")
const { sequelize } = require("../config/db")

async function auth(req, res, next) {
    console.log(req.headers)
    if (!req.header || req.header.token) {
        return res.status(401).send({ error: "token not found" })
    }

    let check = jwt.verify(req.headers.token, "pk")

    if (!check || check.error) {
        return res.status(401).send({ error: "invalid token " })
    }
    let user = await sequelize.query(`select usertable.id,usertable.username,user_role.role_id,role_permission.permission
    from usertable
    LEFT JOIN user_role
    on usertable.id = user_role.user_id
    left JOIN role_permission
    on user_role.role_id = role_permission.role_id
    left JOIN permission
    on permission.id = role_permission.permission where usertable.id =${check.id}`, {
        type: QueryTypes.SELECT,
        replacements: { key: check.id }
    }).catch((err) => { return { error: err } })

    if (!user || (user && user.error)) {
        return res.status(401).send({ error: "user not find" })
    }
    let userpermission = {};
    for (let data of user) {
        userpermission[data.permission] = 1
    }

    if (permission && !userpermission[permission]) {
        return res.status(401).send("access denied")
    }

    req.userData = { id: check.id, name: user[0].name, permission: userpermission }

    next()
}

module.exports = auth