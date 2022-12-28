const { User } = require("../schema/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { emailverify } = require("../helper/email")


async function add(param) {
    let doesexist = await User.findOne({ where: { emailId: param.emailId } })
    if (doesexist) {
        return { error: { status: 400, message: "user already exist" } }
    }
    let salt = await bcrypt.genSalt(11)
    param.password = await bcrypt.hash(param.password, salt)
    param.checkPassword = await bcrypt.hash(param.checkPassword, salt)
    let userData = await User.create(param).catch((err) => { return { error: err } })
    if ((userData && userData.error) || !userData) {
        return { error: { status: 400, message: userData.error.message } }
    }
    let msg = "you successfuly registered"
    let sent = await emailverify(userData, msg)
    return { data: userData }
}

async function get() {
    let userData = await User.findAll().catch((err) => { return { error: err } })
    if (!userData) {
        return { error: { status: 400, message: userData.error.message } }
    }
    return { data: userData }
}

async function remove(param) {
    let userData = await User.destroy({ where: { id: param } })
    if (userData === null) {
        return { error: { status: 400, message: "invalid user id" } }
    }
    return { data: userData }
}

async function login(param) {
    let userData = await User.findOne({ where: { emailId: param.email } })
    if (!userData || userData === null) {
        return { error: { status: 400, message: "signup needed" } }
    }

    let check = await bcrypt.compare(param.password, userData.password)
    if (!check) {
        return { error: { status: 400, message: "invalid user id or password" } }
    }

    let token = jwt.sign({ id: userData.id }, "pk")

    return { data: token }
}

async function forget(param) {
    let userData = await User.findOne({ where: { id: param.id } })
    if (userData === null) {
        return { error: { status: 400, message: "invalid user" } }
    }
    const secret = userData.password

    const payload = {
        id: userData.id,
        email: param.email
    }
    const token = jwt.sign(payload, secret, { expiresIn: "20m" })

    const link = `http://localhost:3000/api/user/forget/${userData.id}/${token}`

    let sub = "forget password mail"

    let sent = await emailverify(userData, link, sub)


    return { data: "email has been sent on your registered gmail account" }
}
async function verify(param1, param2) {

    let userData = await User.findOne({ where: { id: param1.id } })
    if (userData == null) {
        return { error: { status: 400, message: "invalid user " } }

    }

    if (param1.id != userData.id) {
        return { error: { status: 400, message: "invalid user  " } }
    }
    const secret = userData.password

    const load = jwt.verify(param1.token, secret)

    if (!load) {
        return { error: { status: 400, message: "not verified token" } }
    }

    let salt = await bcrypt.genSalt(11)
    param2.password = await bcrypt.hash(param2.password, salt)
    param2.checkPassword = await bcrypt.hash(param2.checkPassword, salt)
    let reset = await User.update(param2, { where: { id: userData.id } })
        .catch((err) => { return { error: err } })


    if (reset.error || !reset || reset === null) {
        return { error: { status: 400, message: reset.error } || "cant update " }
    }

    return { data: userData }

}
async function changePassword(param1, param2) {
    let userData = await (await User.update(param1, { where: { id: param2 } })).catch((err) => { return { error: err } })

    if (!userData || userData.error) {
        return { error: { status: 400, message: userData.error || "cant change password" } }
    }

    return { data: userData }

}

async function update(param1, param2) {
    let userData = await User.update(param1, { where: { id: param2 } }).catch((err) => {
        return { error: err }
    })
    if (userData.error || userData === null) {
        return { error: { status: 400, message: userData.error.message || "cant update" } }
    }

    return { data: userData }
}

module.exports = {
    User: {
        add,
        get,
        login,
        update,
        remove,
        forget,
        verify,
        changePassword
    },

}