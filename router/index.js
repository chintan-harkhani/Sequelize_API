const UserLogin = require("./user.login.router");
const UserRoute = require("./user.router");
const express = require("express");
const router = express.Router();

router.use("/",UserLogin);
router.use("/",UserRoute);



module.exports =router;