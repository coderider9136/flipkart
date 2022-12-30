const { permit } = require("../model/rolePermission")

const Obj = {};


Obj.addall = async(req, res) => {
    let { data, error } = await permit.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}



Obj.update = async(req, res) => {

    let { data, error } = await permit.update(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = Obj