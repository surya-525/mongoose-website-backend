//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const cartApi = require('../apis/cartApis')
//fetch all records
router.get("/cart",cartApi.cart_get)
router.post("/add_to_cart",cartApi.add_to_cart)
router.post("delete_cart",cartApi.delete_from_cart)
// router.post("/add_to_cart",productApi.add_cart)
//export router
module.exports = router
