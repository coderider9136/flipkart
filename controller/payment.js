const pay = require("../model/payment")

const payObj = {};

payObj.add = async(req, res) => {
    let { data, error } = await pay.add(req.body).catch((err) => {
        return { error: { status: 400, message: error.message } }
    })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

payyObj.get = async(req, res) => {
    let { data, error } = await pay.get(

    ).catch((err) => {
        return { error: { status: 400, message: error.message } }
    })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = payObj