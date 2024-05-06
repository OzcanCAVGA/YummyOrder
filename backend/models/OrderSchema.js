const mongoose = require("mongoose");
const Product = require("./ProductSchema")
const User = require("./UserSchema")
const Table = require('./TableSchema')

const OrderSchema = {
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Product
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Siparis alindi', 'Hazirlaniyor', 'Hazir', 'Servis edildi'],
        default: 'Siparis alindi',
    },

    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Table,
    },
 
}

const Order = mongoose.model("Order", OrderSchema, "orders")
module.exports = Order;
