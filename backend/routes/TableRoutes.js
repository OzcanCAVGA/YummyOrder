const express = require('express');
const router = express.Router();
const tableControler = require("../controllers/TableController")
const TableSchema = require('../models/TableSchema');

router
    .route("/admin/tables/addTable")
    .post(tableControler.addTable)

    router
    .route("/admin/tables/")
    .get(tableControler.getAllTables)



router
    .route("/admin/tables/:tableid")
    .get(tableControler.getTableById)


router
    .route("/admin/tables/:tableid")
    .put(tableControler.updateTable)

router
    .route("/admin/tables/status/:tableid")
    .put(tableControler.changeStatus)

router
    .route("/admin/tables/:tableid")
    .delete(tableControler.deleteTable)


module.exports = router;