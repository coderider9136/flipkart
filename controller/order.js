const order = require("../model/order")
const orderObj = {}

orderObj.add = async(req, res) => {
    let { data, error } = await order.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


orderObj.get = async(req, res) => {
    let { data, error } = await order.get().catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


orderObj.update = async(req, res) => {
    let { data, error } = await order.add(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send("updated")
}


orderObj.delete = async(req, res) => {
    let { data, error } = await order.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send("deleted successfully")
}

module.exports = orderObj