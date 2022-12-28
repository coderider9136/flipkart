const { pro } = require("../schema/product")

async function add(param, imagePath) {

    let product = await pro.create({
        name: param.name,
        prize: param.prize,
        productUrl: imagePath

    }).catch((err) => { return { error: err } })

    if (product.error) {
        return { error: { status: 400, message: product.error.message } }
    }

    return { data: product }
}

async function get() {
    let product = await pro.findAll().catch((err) => { return { error: err } })

    if (product.error) {
        return { error: { status: 400, message: product.error.message } }
    }
    return { data: product }
}

async function update(param1, param2) {

    let product = await pro.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (!product || product.error || product === null) {
        return { error: { status: 400, message: product.error.message } || "cant update" }
    }
    return { data: product }
}

async function remove(param) {
    let product = await pro.destroy({ where: { id: param } }).catch((err) => { return { error: err } })

    if (!product || product.error, product === null) {
        return { error: { status: 400, message: product.error.message } || "cant delete user" }
    }
    return { data: product }
}


module.exports = {
    product: {

        add,
        get,
        update,
        remove
    },
    pro
}