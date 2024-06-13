//import express module
const express = require('express')
//create router instance
const router = express.Router()

//import productApi
const userApi = require('../apis/userApis')

router.get("/user_get", userApi.users_all)
router.get("/login", userApi.loginUser)
router.post("/deleteuser",userApi.delete_user)
router.post("/registration",userApi.insert_user)

module.exports=router   