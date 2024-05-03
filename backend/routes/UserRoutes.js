var express = require('express');
var router = express.Router();
var ctrlUser = require("../controllers/UserController")


router.get("/merhaba", ctrlUser.merhaba);
//router.post("/signup", ctrlUser.register);

module.exports = router;