var mongoose = require("mongoose");

const ManagerSchema = {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    permissions: [{
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
    }],
};

mongoose.model("Manager", ManagerSchema, "managers")
const managersSchema = mongoose.model("Manager");
module.exports = managersSchema;