const orderitem = require("../controller/order-item")
const express = require("express")
const rout = express.Router()

rout.post("/", orderitem.add)
rout.get("/", orderitem.get)
rout.delete("/:id", orderitem.delete)
rout.put("/:id", orderitem.update)


module.exports = rout