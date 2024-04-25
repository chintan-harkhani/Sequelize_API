const UserController = require("../controller/user.controller");
const express = require("express");
const router = express.Router();
const {auth ,ChekRoll}  = require("../middleware/auth");

router.post("/user", UserController.CreateUser);

router.get("/userlist", auth, ChekRoll('admin'), UserController.ViewUserall);

router.get("/count", UserController.CountUser);

router.get("/userid/:id", UserController.ViewUser);

router.delete("/delete/:id", UserController.deleteUser);

router.delete("/deleteall", UserController.allUserDelete);

router.put("/update/:id", UserController.UpdateUser);

router.get("/rowuser", UserController.RowQueryUser);

module.exports = router;