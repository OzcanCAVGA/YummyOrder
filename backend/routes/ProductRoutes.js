var express = require('express');
var router = express.Router();
const productSchema = require('../models/ProductSchema');
var productController = require('../controllers/ProductController');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeAdmin = require('../middlewares/authorizeAdmin');

router
    .route("/admin/products/addproduct")
    .post(authenticateToken, authorizeAdmin, productController.addProduct);

router
    .route("/admin/products/:productid")
    .put(productController.updateProduct)

router
    .route("/admin/products/:productid")
    .delete(productController.deleteProduct)

router
    .route("/admin/products/:category")
    .get(productController.categoryProducts)

router
    .route("/admin/products/searchProducts")
    .get(productController.searchProducts)

router
    .route("/products/product-detail/:productid")
    .get(productController.getProductById)

router
    .route("/products")
    .get(productController.getProducts)


module.exports = router;