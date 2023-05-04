const express = require("express")
const app = express()

app.use(express.json())

/* ROUTE IMPORTS */
const product = require("./Routes/ProductRoute")

app.use("/api/v1", product)

module.exports = app