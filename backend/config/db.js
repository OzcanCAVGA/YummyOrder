var mongoose = require('mongoose')
var dbURI = process.env.DB_URI

const User = require('../models/UserSchema');
const Comment = require('../models/CommentSchema');
const Product = require('../models/ProductSchema');
const Order = require('../models/OrderSchema');
const Table = require('../models/TableSchema');

mongoose.connect(dbURI)
    .then(() => {
        User.createIndexes();
        Comment.createIndexes();
        Product.createIndexes();
        Order.createIndexes();
        Table.createIndexes();
    })
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
    kapat("Uygulama kapatildi!", function () {
        process.exit(0)
    })
})


