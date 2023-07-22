const express = require("express");
const { createOrder, getOrders, changeOrder, deleteOrder } = require("../controllers/orders");
const { verifyToken } = require("../utils");
const router = express.Router();


router.post("/createOrder",verifyToken, createOrder);

router.get("/getOrders",verifyToken,getOrders);

router.put("/changeOrder",verifyToken,changeOrder);

router.delete("/deleteOrder",verifyToken,deleteOrder);

module.exports = router;