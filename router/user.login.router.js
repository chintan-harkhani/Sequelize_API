const LoginController = require("../controller/login.user.controller");
const express = require("express");
const router = express.Router();

router.post("/login" ,LoginController.UserLogin );



module.exports =router;