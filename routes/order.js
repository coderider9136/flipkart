const order = require("../controller/order")
const express = require("express")
const rout = express.Router()

rout.post("/", order.add)
rout.get("/", order.get)
rout.delete("/:id", order.delete)
rout.put("/:id", order.update)


module.exports = rout