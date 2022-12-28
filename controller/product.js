const { product } = require("../model/product")
const uploads = require("../helper/multer")

proObj = {}

proObj.addall = async(req, res) => {
    let img = await uploads(req, res, [{ name: "product", maxCount: 4 }], { destination: './product-pic/' }).catch((err) => { return { error: err } })

    console.log(img)
    if (!img || img.error) {
        return res.status(img.error.status || 401).send(img.error.message || "upload error")
    }
    let pic = []
    for (let i of img.product) {
        pic.push(i.path)
    }

    let path = pic.join("  AND  ");

    let { data, error } = await product.add(req.body, path).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

proObj.getall = async(req, res) => {
    let { data, error } = await product.get(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

proObj.update = async(req, res) => {
    let { data, error } = await product.update(req.body, req.params.id)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

proObj.delete = async(req, res) => {
    let { data, error } = await product.remove(req.params.id)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = proObj