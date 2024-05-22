require('dotenv').config();
const cors = require("cors");

const express = require("express");
var app = express();
const mongodb = require("./config/db");

const UserRoute = require("../backend/routes/UserRoutes")
const ProductRoutes = require("../backend/routes/ProductRoutes")
const TableRoutes = require("../backend/routes/TableRoutes")
const OrderRoutes = require("../backend/routes/OrderRoutes")

app.use(cors({
    origin: "http://localhost:3000",
    methods: 'GET,POST,DELETE,PUT', // izin verilen HTTP metotları
    allowedHeaders: 'Content-Type,Authorization' // izin verilen başlıklar
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", UserRoute);
app.use("/api/v1", TableRoutes);
app.use("/api/v1", ProductRoutes);
app.use("/api/v1", OrderRoutes);
app.use(
  '/api',
  (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 8080);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  }
);


app.listen(process.env.PORT, function () {
    console.log("Started app. on port %d", process.env.PORT);
})