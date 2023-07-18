const express = require('express');
const router = express.Router();

let {createUser, login, deleteUser} = require("../controllers/users")

router.post("/registration",createUser);
router.post("/login",login);
router.post("/deleteUser",deleteUser)

module.exports = router;