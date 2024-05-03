var express = require('express');
var router = express.Router();
const productSchema = require('../models/productSchema');
var productController = require('../controllers/ProductController');


router
    .route("/admin/products/addproduct")
    .post(productController.addProduct)


module.exports = router;