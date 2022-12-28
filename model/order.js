const { Order } = require("../schema/order")
const { User } = require("../schema/user")
const { pro } = require("../schema/product")
const { wishlist } = require("../schema/wishlist")

async function add(param) {
    let userdata = await User.findOne({ where: { id: param.userId } })
    if (!userdata || userdata === null) {
        return { error: { status: 400, message: userdata.error || "cant find user" } }
    }

    let orderData = await Order.create(param).catch((err) => { return { error: err } })
    if (!orderData || (orderData && orderData.error)) {
        return { error: { status: 400, message: orderData.error.message || "cant create order" } }
    }
    let checkWishList = await wishlist.findOne({ where: { id: param.productId } })
    if (checkWishList) {
        let removeWishList = await wishlist.destroy({ where: { id: param.productId } })
    }

    return { data: orderData }
}

async function get() {
    let orderData = await Order.findAll().catch((err) => { return { error: err } })

    if (!orderData || (orderData && orderData.error)) {
        return { error: { status: 400, message: orderData.error.message } }
    }
    return { data: orderData }
}

async function update(param1, param2) {
    let orderData = await Order.update(param1, { where: { id: param2 } }).catch((err) => { error: err })
    if (!orderData || (orderData && orderData.error)) {
        return { error: { status: 400, message: orderData.error.message || "cant update " } }
    }
    return { data: orderData }

}

async function remove(param) {
    let orderData = await Order.destroy({ where: { id: param } }).catch((err) => { return { error: err } })

    if (!orderData || orderData.error || orderData === null) {
        if (!orderData || (orderData && orderData.error)) {
            return { error: { status: 400, message: orderData.error.message || "cant update " } }
        }
        return { data: orderData }
    }
}

module.exports = {
    add,
    get,
    remove,
    update
}