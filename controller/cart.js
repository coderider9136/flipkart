const { Cart } = require("../model/cart")


const cartObj = {}

cartObj.add = async(req, res) => {
    let { data, erorr } = await Cart.add(req.body).catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

cartObj.get = async(req, res) => {
    let { data, erorr } = await Cart.get().catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

cartObj.delete = async(req, res) => {
    let { data, erorr } = await Cart.remove().catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

cartObj.update = async(req, res) => {
    let { data, erorr } = await Cart.update().catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

module.exports = cartObj