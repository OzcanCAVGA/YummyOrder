const express = require('express');
const router = express.Router();
const tableControler = require("../controllers/TableController")
const TableSchema = require('../models/TableSchema');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeAdmin = require('../middlewares/authorizeAdmin');

router
    .route("/admin/tables/addTable")
    .post(authenticateToken, authorizeAdmin, tableControler.addTable)

router
    .route("/admin/tables/")
    .get(authenticateToken, authorizeAdmin, tableControler.getAllTables)


router
    .route("/admin/tables/:tableid")
    .get(authenticateToken, tableControler.getTableById)


router
    .route("/admin/tables/:tableid")
    .put(tableControler.updateTable)

router
    .route("/admin/tables/status/:tableid")
    .put(tableControler.changeStatus)

router
    .route("/admin/tables/:tableid")
    .delete(tableControler.deleteTable)

router
    .route("/user/:tableid")
    .put(tableControler.takeSeat)

module.exports = router;