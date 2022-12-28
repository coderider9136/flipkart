const orderitem = require("../model/order-items")

const orderitemObj = {}

orderitemObj.add = async(req, res) => {
    let { data, error } = await orderitem.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


orderitemObj.get = async(req, res) => {
    let { data, error } = await orderitem.get().catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


orderitemObj.update = async(req, res) => {
    let { data, error } = await orderitem.add(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send("updated")
}


orderitemObj.delete = async(req, res) => {
    let { data, error } = await orderitem.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.message : 400
        return res.staus(error.status).send(error.message)
    }
    return res.status(200).send("deleted successfully")
}

module.exports = orderitemObj