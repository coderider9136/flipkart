const role = require("../model/role")

const roleObj = {};


roleObj.addall = async(req, res) => {
    let { data, error } = await role.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

roleObj.get = async(req, res) => {
    let { data, error } = await role.get()
    if (error) {
        error.status = (error.status) ? error.status : 400

        return res.status(error.status).send(error.message).catch((err) => { return { error: err } })
    }
    return res.status(200).send(data)
}


roleObj.update = async(req, res) => {
    let { data, error } = await role.update(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400

        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

roleObj.remove = async(req, res) => {
    let { data, error } = await role.remove(req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400

        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = roleObj