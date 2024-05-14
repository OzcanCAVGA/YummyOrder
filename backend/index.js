require('dotenv').config();
const express = require("express");
var app = express();
const mongodb = require("./config/db");

const UserRoute = require("../backend/routes/UserRoutes")
const ProductRoutes = require("../backend/routes/ProductRoutes")
const TableRoutes = require("../backend/routes/TableRoutes")
const OrderRoutes = require("../backend/routes/OrderRoutes")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", UserRoute);
app.use("/api/v1", TableRoutes);
app.use("/api/v1", ProductRoutes);
app.use("/api/v1", OrderRoutes);



app.listen(process.env.PORT, function () {
    console.log("Started app. on port %d", process.env.PORT);
})