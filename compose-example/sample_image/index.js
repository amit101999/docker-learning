const express = require("express")
const app = express()
const dotenv = require("dotenv").config()

app.get("/", (req, res) => {
    res.status(200).json({ msg: "server running " })
})

app.listen(process.env.PORT, () => {
    console.log(`server started at ${process.env.PORT}`)
})

