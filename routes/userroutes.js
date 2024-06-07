const usercontroller = require("../controllers/Usercontroller")

const express = require("express")
const userrouter = express.Router()

userrouter.post("/checkuserlogin",usercontroller.checkuserlogin)
userrouter.post("/insertuser",usercontroller.insertuser)

module.exports = userrouter