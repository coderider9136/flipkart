const { pay } = require("../schema/payment")
const joi = require("joi")
const validate = require("../helper/joi")

async function add(param) {
    let schema = joi.object({
        amount: joi.string().required(),
        method: joi.string().required(),
        paymentPartner: joi.string().required(),
        status: joi.boolean(),
        paymentDetails: joi.object()
    })

    let value = validate(schema, param)
    if (value.errMsg) {
        return { error: { status: 400, message: value.errMsg } }
    }
    let payData = await pay.create(param).catch((err) => { return { error: err } })
    if (!payData || (payData && payData.error)) {
        return { error: { status: 400, message: payData.error.message } }
    }

    return { data: payData }
}

async function get() {
    let payData = await pay.findAll().catch((err) => { return { error: err } })
    if (!payData || payData.error) {
        return { error: { status: 400, message: payData.error || "cant find" } }
    }
    return { data: payData }
}

module.exports = {
    add,
    get
}