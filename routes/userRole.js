const userRole = require("../controller/userRole")
const express = require("express")
const rout = express.Router()
const auth = require("../helper/auth")




rout.post("/", userRole.addall)
rout.get("/", userRole.get)
rout.put("/:id", userRole.update)
rout.delete("/:id", userRole.remove)



module.exports = rout