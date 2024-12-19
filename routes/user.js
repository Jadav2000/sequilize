const express = require("express");
const { CreateUser } = require("../controller/User");
const router = express.Router();



router.post("/create-user", CreateUser);

module.exports = router;
