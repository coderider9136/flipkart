const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")
const product = require("./product")
const { pro } = require("./product")
const { User } = require("../schema/user")
const { cart } = require("../schema/cart")
    //cart.sync({ sync: true })
async function add(param) {
    let userData = await User.findOne({ where: { id: param.userId } }).catch((err) => {
        return { error: err }
    })

    if (!userData || userData) {
        return { error: { status: 400, message: userData.error.message || "cant find user" } }
    }
    let productData = await pro.findOne({ where: { id: param.productId } }).catch((err) => { return { error: err } })
    if (!productData || productData === null) {
        return { error: { status: 400, message: productData.error || "cant find product" } }
    }

    if (productData.stock <= 0) {
        return { error: { status: 400, message: "out of stock" } }
    }
    let cartData = await cart.create({
        userId: param.userId,
        productId: param.productId,
        price: productData.price,
        quentity: param.quentity
    }).catch((err) => { return { error: err } })

    if (!cartData || (cartData && cartData.error)) {
        return { error: { status: 400, message: cartData.error.message || "cant create" } }
    }
    console.log(cartData);
    return { data: cartData }
}

async function get() {
    let cartData = await cart.findAll().catch((err) => { return { error: err } })

    if (!cartData || (cartData && cartData.error)) {
        return { error: { status: 400, message: cartData.error.message || "cant get data" } }
    }

    return { data: cartData }
}

async function remove(param) {
    let cartData = await cart.destroy({ where: { id: param.id } }).catch((err) => {
        return { error: err }
    })
    if (!cartData || (cartData && cartData.error)) {
        return { error: { status: 400, message: cartData.error.message || "cant remove" } }
    }

    return { data: cartData }
}

async function update(param1, param2) {
    let cartData = await cart.update(param1, { where: { id: param2 } }).catch((err) => {
        return { error: err }
    })
    if (!cartData || (cartData && cartData.error)) {
        return { error: { status: 400, message: cartData.error.message || "cant update" } }
    }

    return { data: cartData }
}

module.exports = {
    Cart: {
        add,
        update,
        remove,
        get
    },
    cart
}