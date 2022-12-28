const cat = require("../model/category")

catObj = {}

catObj.add = async(req, res) => {
    let { data, error } = await cat.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        return res.status(400).send(error.message)
    }

    return res.status(200).send(data)
}

catObj.get = async(req, res) => {
    let { data, error } = await cat.get().catch((err) => { return { error: err } })
    if (error) {
        return res.status(400).send(error.message)
    }
    return res.status(200).send(data)
}

catObj.getOne = async(req, res) => {
    let { data, error } = await cat.getOne(req.body).catch((err) => { return { error: err } })
    if (error) {
        return res.status(400).send(error.message)
    }
    return res.status(200).send(data)
}


module.exports = catObj