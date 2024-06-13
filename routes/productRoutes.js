//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/productApis')
//fetch all records
router.get("/fetch", productApi.products_all)

// router.post("/add_to_cart",productApi.add_cart)
//export router
module.exports = router
