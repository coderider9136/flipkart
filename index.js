const express = require("express")
const app = express()
const init = require("./routes/init")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", init)

app.listen(3000, () => console.log("server......"))