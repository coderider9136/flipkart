const role = require("../controller/role")
const express = require("express")
const rout = express.Router()
const auth = require("../helper/auth")


rout.post("/", role.addall)
rout.get("/", role.get)
rout.put("/:id", role.update)
rout.delete("/:id", role.remove)


module.exports = rout