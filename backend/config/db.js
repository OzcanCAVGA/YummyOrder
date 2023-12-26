var mongoose = require('mongoose')
var dbURI = process.env.DB_URI

mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
    console.log(dbURI + " adresindeki veritabanina baglanildi")
})
mongoose.connection.on('error', function () {
    console.log(dbURI + " baglanti hatasi")
})
mongoose.connection.on('disconnected', function () {
    console.log(dbURI + " baglanti kesildi")
})

function kapat(msg, callback) {
    mongoose.connection.close(function () {
        console.log(msg)
        callback();
    })
}
process.on('SIGINT', function () {
    kapat("Uygulama kapatildi!", function() {
        process.exit(0)
    })
})
require("../models/customerSchema")
require("../models/managerSchema")
require("../models/productSchema")
require("../models/waiterSchema")
