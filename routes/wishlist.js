const express = require("express")
const rout = express.Router()
const wishlist = require("../controller/wishlist")


rout.post("/", wishlist.add)
rout.get("/", wishlist.get)
rout.delete("/:id", wishlist.delete)
rout.put("/:id", wishlist.update)

module.exports = rout