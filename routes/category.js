const cat = require("../controller/category")
const express = require("express")
const rout = express.Router()
const auth = require("../helper/auth")


rout.post("/", auth, cat.add)
rout.get("/", cat.get)
rout.get("/getOne", cat.getOne)

module.exports = rout