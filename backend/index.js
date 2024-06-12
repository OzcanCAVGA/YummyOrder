require('dotenv').config();

const express = require("express");
const cors = require("cors");

const UserRoute = require("../backend/routes/UserRoutes")
const ProductRoutes = require("../backend/routes/ProductRoutes")
const TableRoutes = require("../backend/routes/TableRoutes")
const OrderRoutes = require("../backend/routes/OrderRoutes")
const mongodb = require("./config/db");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080'], // İzin verilen domainler
  methods: 'GET,POST,DELETE,PUT', // izin verilen HTTP metotları
  allowedHeaders: 'Content-Type,Authorization' // izin verilen başlıklar
}));

app.use("/api/v1", UserRoute);
app.use("/api/v1", TableRoutes);
app.use("/api/v1", ProductRoutes);
app.use("/api/v1", OrderRoutes);
app.use(
  '/api/v1',
  (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  }
);
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ': ' + err.message });
  }
});
app.listen(process.env.PORT, function () {
  console.log("Started app. on port %d", process.env.PORT);
})