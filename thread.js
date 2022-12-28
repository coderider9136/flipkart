const express = require("express")
const app = express()
app.use(express.json())
let { Worker } = require("worker_threads")


app.get("/block", (req, res) => {
    let worker = new Worker("./worker.js");
    worker.on("message", (data) => {

        return res.send("blocked")
    })
})

app.get("/home", (req, res) => {
    return res.send("demo")
})
app.listen(5000, () => console.log("server"))