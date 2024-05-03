var mongoose = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Permissions = new mongoose.Schema(
    {
        addProduct: { type: Boolean, default: false },
        removeProduct: { type: Boolean, default: false },
        updateProduct: { type: Boolean, default: false },
        viewOrders: { type: Boolean, default: false },
        addTable: { type: Boolean, default: false },
        viewTable: { type: Boolean, default: false },
        manageTableOrders: { type: Boolean, default: false },
        viewStats: { type: Boolean, default: false },
        paymentApproval: { type: Boolean, default: false }, // Ödeme onayı
        refundManagement: { type: Boolean, default: false }, // İade işlemleri
    })

const ManagerSchema = {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    permissions: [Permissions],
};

// ManagerSchema.methods.createPassword = (password) => {
//     this.salt = crypto.randomBytes(16).toString("hex");
//     this.hash = crypto
//         .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
//         .toString("hex");
// }


mongoose.model("Manager", ManagerSchema, "managers")
const managersSchema = mongoose.model("Manager");
module.exports = managersSchema;