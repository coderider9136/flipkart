const express = require("express")
const rout = express.Router()
const wishlist = require("../controller/wishlist")


rout.post("/", wishlist.add)
rout.get("/", wishlist.get)
rout.delete("/", wishlist.delete)
rout.put("/", wishlist.update)

module.exports = rout