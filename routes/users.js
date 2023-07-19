const express = require('express');
const router = express.Router();

let {createUser, login, getUserInfo } = require("../controllers/users");
const { validateToken, verifyToken } = require('../utils');

router.post("/registration",createUser);
router.post("/login",login);
router.get("/mi",verifyToken, getUserInfo);
// router.post("/deleteUser",deleteUser)

module.exports = router;