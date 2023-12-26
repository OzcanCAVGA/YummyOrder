var mongoose = require("mongoose");

const WaiterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    permissions: [{
        orderApproval: { type: Boolean, default: false }, // Sipariş onayı
        orderManagement: { type: Boolean, default: false }, // Sipariş yönetimi
        paymentApproval: { type: Boolean, default: false }, // Ödeme onayı
        refundManagement: { type: Boolean, default: false }, // İade işlemleri
        tableOrderManagement: { type: Boolean, default: false }, // Masaya sipariş yönetimi
        tableOccupancyView: { type: Boolean, default: false }, // Masalardaki doluluğu görme
    }],
})

module.exports = mongoose.model('Waiter', WaiterSchema)

mongoose.model('Waiter', WaiterSchema, "waiters")
const waiterSchema = mongoose.model("Waiter");
module.exports = waiterSchema;