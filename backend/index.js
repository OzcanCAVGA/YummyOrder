require('dotenv').config();

const express = require("express");
var app = express();
const mongodb = require("./config/db");
app.listen(process.env.PORT, function () {
    console.log("Started app. on port %d", process.env.PORT);
})