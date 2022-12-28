const cart = require("../controller/cart")
const express = require("express")
const rout = express.Router()


rout.post("/", cart.add)
rout.get("/", cart.get)
rout.delete("/", cart.delete)
rout.put("/", cart.update)

module.exports = rout