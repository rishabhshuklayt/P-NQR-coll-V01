const express = require("express");
const router = express.Router();
const registerUserController = require("../controllers/UserControllers/user.auth.controller")

router.post("/register",registerUserController)

module.exports = router;