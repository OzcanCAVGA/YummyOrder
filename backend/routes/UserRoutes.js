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
    .route("/loggedInUser")
    .get(authenticateToken, UserController.loggedInUser)


router
    .route('/users/getallusers')
    .get(authenticateToken, UserController.getAllUsers)

router
    .route('/users/:userid')
    .get(authenticateToken, UserController.getUserById)

router
    .route('/users/:userid')
    .put(authenticateToken, UserController.updateUser)

router
    .route('/users/:userid')
    .delete(authenticateToken, UserController.deleteUser)



module.exports = router;