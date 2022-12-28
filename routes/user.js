const user = require("../controller/user")
const express = require("express")
const rout = express.Router()
const auth = require("../helper/auth")



rout.post("/", user.adduser);
rout.get("/", auth, user.getall);
rout.put("/:id", auth, user.updateuser)
rout.delete("/:id", auth, user.deleteall)
rout.get("/login", user.login)
rout.post("/forget", auth, user.forget)
rout.post("/forget/:id/:token", auth, user.reset)


module.exports = rout