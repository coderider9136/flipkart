const { orderItem } = require("../schema/order-item")
const { pro } = require("../schema/product")
const { Order } = require("../schema/order")
const { param } = require("../routes/role")

async function add(param) {
    let prodata = await pro.findOne({ where: { id: param.productId } }).catch((err) => { return { error: err } })
    if (!prodata || prodata.error) {
        return { error: { status: 400, message: prodata.error || "cant find product" } }
    }
    let orderdata = await Order.findOne({ where: { id: param.orderId } }).catch((err) => { return { error: err } })
    if (!orderdata || orderdata.error) {
        return { error: { status: 400, message: orderdata.error || "cant find order id" } }
    }

    let orderItemData = await orderItem.create(param).catch((err) => { return { error: err } })
    if (!orderItemData || (orderItemData && orderItemData.error)) {
        return { error: { status: 400, message: orderItemData.error.message || "cant add" } }
    }

    return { data: orderItemData }

}


async function get() {
    let orderItemData = await orderItem.findAll().catch((err) => { return { error: err } })

    if (!orderItemData || (orderItemData && orderItemData.error)) {
        return { error: { status: 400, message: orderItemData.error.message } }
    }
    return { data: orderItemData }
}

async function update(param1, param2) {
    let orderItemData = await orderItem.update(param1, { where: { id: param2 } }).catch((err) => { error: err })
    if (!orderItemData || (orderItemData && orderItemData.error)) {
        return { error: { status: 400, message: orderItemData.error.message || "cant update " } }
    }
    return { data: orderItemData }

}

async function remove(param) {
    let orderItemData = await orderItem.destroy({ where: { id: param } }).catch((err) => { return { error: err } })

    if (!orderData || orderData.error || orderData === null) {
        if (!orderItemData || (orderItemData && orderItemData.error)) {
            return { error: { status: 400, message: orderItemData.error.message || "cant update " } }
        }
        return { data: orderItemData }
    }
}

module.exports = {
    add,
    get,
    remove,
    update
}