require('dotenv').config();
const express = require("express");
var app = express();
const mongodb = require("./config/db");

const UserRoute = require("../backend/routes/UserRoutes")
const ProductRoutes = require("../backend/routes/ProductRoutes")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", UserRoute);
app.use("/api/v1", ProductRoutes);



app.listen(process.env.PORT, function () {
    console.log("Started app. on port %d", process.env.PORT);
})