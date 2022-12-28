const pro = require("../controller/product")
const express = require("express")
const rout = express.Router()
const auth = require("../helper/auth")


rout.post("/", pro.addall)
rout.get("/", pro.getall)
rout.put("/:id", auth, pro.update)
rout.delete("/:id", auth, pro.delete)

module.exports = rout