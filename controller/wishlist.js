const wishlist = require("../model/wishlist")


const wishlistObj = {}

wishlistObj.add = async(req, res) => {
    let { data, erorr } = await wishlist.add(req.body).catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

wishlistObj.get = async(req, res) => {
    let { data, erorr } = await wishlist.get().catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

wishlistObj.delete = async(req, res) => {
    let { data, erorr } = await wishlist.remove().catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

wishlistObj.update = async(req, res) => {
    let { data, erorr } = await wishlist.update().catch((err) => { return { erorr: err } })

    if (erorr) {
        erorr.status = (erorr.status) ? erorr.status : 400
        return res.status(erorr.status).send(erorr.message)
    }

    return res.status(200).send(data)
}

module.exports = wishlistObj