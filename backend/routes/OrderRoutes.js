const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/OrderController")
const authenticateToken = require('../middlewares/authenticateToken')
const OrderSchema = require('../models/OrderSchema');

router
    .route("/admin/orders/view")
    .get(OrderController.getAllOrders)


router
    .route("/order/getOrder")
    .get(authenticateToken, OrderController.getOrder)


router
    .route("/admin/order/createorder")
    .post(authenticateToken, OrderController.createOrder)

router
    .route("/admin/order/:orderid")
    .delete(OrderController.deleteOrder)


router
    .route("/admin/order/vieworder/:orderid")
    .get(OrderController.viewOrderStatus)

router
    .route("/admin/order/:orderid")
    .put(OrderController.updateOrderStatus)






module.exports = router;