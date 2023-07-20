const express = require("express");
const { createOrder, getOrders } = require("../controllers/orders");
const { verifyToken } = require("../utils");
const router = express.Router();


router.post("/createOrder",verifyToken, createOrder);

router.get("/getOrders",verifyToken,getOrders);


module.exports = router;