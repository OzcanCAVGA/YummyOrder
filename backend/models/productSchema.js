var mongoose = require("mongoose");
const Comment = require("./CommentSchema")

const ProductSchema = {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Icecekler', 'Yiyecekler', 'Tatlilar', 'Sicak Yemekler', 'Kahvalti Menusu'],
        required: true
    },
    images: String,
    price: {
        type: Number,
        required: true,
    },

    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment
    }



    /* front end kisminda buralari al */
    // details: {
    //     images: String,
    //     videos: String,
    //     productionStage: {
    //         type: String,
    //         enum: ['Siparis Alindi', 'Yapiliyor', 'Hazir', 'Servis Edildi'],
    //         default: 'Siparis Alindi'
    //     },
    //     ingredients: String,
    // },


};



const Product = mongoose.model("Product", ProductSchema, "products")
module.exports = Product;