const uRole = require("../model/userRole")

const uRoleObj = {};


uRoleObj.addall = async(req, res) => {
    let { data, error } = await uRole.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


uRoleObj.get = async(req, res) => {
    let { data, error } = await uRole.get().catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400

        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


uRoleObj.update = async(req, res) => {
    let { data, error } = await uRole.update(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400

        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

uRoleObj.remove = async(req, res) => {
    let { data, error } = await uRole.remove(req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400

        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


module.exports = uRoleObj