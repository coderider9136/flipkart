const permission = require("../model/permission")

const permitObj = {};


permitObj.addall = async(req, res) => {
    let { data, error } = await permission.add(req.body)
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

permitObj.get = async(req, res) => {
    let { data, error } = await permission.get()
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


permitObj.update = async(req, res) => {
    let { data, error } = await permission.update(req.body, req.params.id)
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


permitObj.delete = async(req, res) => {
    let { data, error } = await permission.remove(req.body)
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}



module.exports = permitObj