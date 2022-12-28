const { wishlist } = require("../schema/wishlist")
const { User } = require("../schema/user")
const { pro } = require("../schema/product")
async function add(param) {

    let userData = await User.findOne({ where: { id: param.userId } }).catch((err) => { return { error: err } })

    if (!userData || userData.error) {
        return { error: { status: 400, message: userData.error || "cant find user" } }
    }

    let proData = await pro.findOne({ where: { id: param.productID } }).catch((err) => { return { error: err } })

    if (!proData || proData.error) {
        return { error: { status: 400, message: proData.error || "cant find user" } }
    }

    let wishlistData = await wishlist.create(param).catch((err) => { return { error: err } })

    if (!wishlistData || (wishlistData && wishlistData.error)) {
        return { error: { status: 400, message: wishlistData.error.message || "cant create" } }
    }

    return { data: wishlistData }
}

async function get() {
    let wishlistData = await (await wishlist.findAll()).catch((err) => { return { error: err } })

    if (!wishlistData || wishlist.error) {
        return { error: { status: 400, message: wishlistData.error || "cant find data " } }
    }

    return { data: wishlistData }
}


async function remove(param) {
    let wishlistData = await wishlist.destroy({ where: { id: param } })
    if (wishlistData === null) {
        return { error: { status: 400, message: "invalid user id" } }
    }
    return { data: "deleted succesfully" }
}


async function update(param1, param2) {
    let wishlistData = await wishlist.update(param1, { where: { id: param2 } }).catch((err) => {
        return { error: err }
    })
    if (wishlistData.error || wishlistData === null) {
        return { error: { status: 400, message: wishlistData.error.message || "cant update" } }
    }

    return { data: wishlistData }

}

module.exports = {
    add,
    get,
    update,
    remove
}