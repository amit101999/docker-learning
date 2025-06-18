const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.json({
        msg: "hello from get"
    })
})


app.listen(3500, () => {
    console.log("server started")
})