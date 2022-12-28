const { User } = require("../model/user")


let userObj = {};

userObj.adduser = async(req, res) => {
    let { data, error } = await User.add(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}
userObj.updateuser = async(req, res) => {
    let { data, error } = await User.update(req.body, req.params.id)
    if (error) {
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send("updated")
}

userObj.getall = async(req, res) => {
    let { data, error } = await User.get()
    if (error) {
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}

userObj.deleteall = async(req, res) => {
    let { data, error } = await User.remove(req.params.id)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send("deleted")
}

userObj.login = async(req, res) => {
    let { data, error } = await User.login(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }

    return res.header("x-auth-token", data).send("login")
}

userObj.forget = async(req, res) => {
    let { data, error } = await User.forget(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}

userObj.reset = async(req, res) => {
    let { data, error } = await User.verify(req.params, req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}
module.exports = userObj