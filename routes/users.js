const express = require('express');
const router = express.Router();

let {createUser, login, getUserInfo } = require("../controllers/users");
const { verifyToken } = require('../utils');

router.post("/registration",createUser);
router.post("/login",login);
router.get("/mi",verifyToken, getUserInfo);

module.exports = router;