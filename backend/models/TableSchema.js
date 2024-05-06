const mongoose = require("mongoose");
const User = require("./UserSchema")
const Order = require('./OrderSchema')

const TableSchema = {

    name: String,
    tableNumber: {
        type: Number,
        unique: true,
    },
    qrcode:{
        type: String,
        unique: true
    },
    status: {
        type: String,
        enum: ['Boş', 'Dolu', 'Rezerv'],
        default: 'Boş',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Order,
    },

}


const Table = mongoose.model("Table", TableSchema, "tables")
module.exports = Table