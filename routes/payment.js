const pay = require("../controller/payment")
const express = require("express")
const rout = express.Router()

rout.post("/", pay.add)
rout.get("/", pay.get)

module.exports = rout