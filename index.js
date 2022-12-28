const express = require("express")
const app = express()
const init = require("./routes/init")
require("dotenv").config()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", init)

app.listen(port, () => console.log(`server connected at port no. ${port}`))