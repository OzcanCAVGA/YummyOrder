var express = require('express');
var router = express.Router();
var UserController = require("../controllers/UserController")
const authenticateToken = require('../middlewares/authenticateToken')

router
    .route("/merhaba")
    .get(UserController.merhaba);

router
    .route('/signup')
    .post(UserController.register);


router
    .route('/login')
    .post(UserController.login)

router
    .route('/users/:userid')
    .get(UserController.getUserById)

router
    .route('/users/getallusers')
    .get(UserController.getAllUsers)

router
    .route('/users/:userid')
    .get(UserController.getUserById)

router
    .route('/users/:userid')
    .post(UserController.updateUser)

router
    .route('/users/:userid')
    .delete(UserController.deleteUser)



module.exports = router;