var mongoose = require("mongoose");

const ProductSchema = {
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Icecekler', 'Yiyecekler', 'Tatlilar', 'Sicak Yemekler', 'Kahvalti Menusu'],
        required: true
    },
    details: {
        images: String,
        videos: String,
        productionStage: {
            type: String,
            enum: ['Siparis Alindi', 'Yapiliyor', 'Hazir', 'Servis Edildi'],
            default: 'Siparis Alindi'
        },
        ingredients: String,
    },
    price: {
        type: Number,
        required: true,
    },
};

mongoose.model("Product", ProductSchema, "products")
const productSchema = mongoose.model("Product");
module.exports = productSchema;