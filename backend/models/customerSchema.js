var mongoose = require("mongoose");
const Product = require("./productSchema");

const RepliesSchema = new mongoose.Schema({
    replierFirstName: String,
    replierLastName: String,
    replyContent: String,
    replyDate: { type: Date, default: Date.now },
})
const ReviewSchema = new mongoose.Schema(
    {
        reviewerFirstName: String,
        reviewerLastName: String,
        reviewerContent: String,
        reviewDate: { type: Date, default: Date.now },
        replies: [RepliesSchema],
        rating:
        {
            type: Number,
            min: 1,
            max: 5,
        }
    })
const OrderSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product
    },
    reviews: [ReviewSchema]

})
const CustomerSchema = {
    membershipDetails: {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        telephoneNumber: String,
        createdDate: { type: Date, default: Date.now },
        permissions:
        {
            callWaiter: { type: Boolean, default: false },
        }
    },
    tableNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    qrCode: {
        type: String,
        required: true,
        unique: true,
    },
    orders: [OrderSchema]
};
mongoose.model("Customer", CustomerSchema, "customers")
const customerSchema = mongoose.model("Customer");
module.exports = customerSchema;

