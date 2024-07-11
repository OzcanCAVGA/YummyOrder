var express = require('express');
var router = express.Router();
var UserController = require("../controllers/UserController")
const authenticateToken = require('../middlewares/authenticateToken')
const authorizeAdmin = require('../middlewares/authorizeAdmin')



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
    .route('/users/password/:userid')
    .put(authenticateToken, UserController.updatePassword)

router
    .route('/users/:userid')
    .delete(authenticateToken, UserController.deleteUser)

router
    .route('/admin/users-waiters')
    .get(authenticateToken, authorizeAdmin, UserController.getUsersAndWaiters)

router
    .route('/toggleAuthority/:userId')
    .put(authenticateToken, authorizeAdmin, UserController.toggleUserAuthority)

module.exports = router;