const express = require("express")
const { getAllProducts } = require("../Controller/ProductController")
const router = express.Router()

router.get("/products", getAllProducts)

module.exports = router