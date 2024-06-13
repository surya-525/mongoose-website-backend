//import mongoose
const mongoose = require('mongoose')
//create schema object
const cartSchema =new mongoose.Schema({
    p_id:Number,
    p_image:String,
    p_cost:Number,
    u_name:String,
    quantity:Number,
})

module.exports =mongoose.model("Cart", cartSchema)