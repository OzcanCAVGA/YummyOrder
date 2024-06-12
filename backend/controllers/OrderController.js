const Order = require('../models/OrderSchema')
const Table = require('../models/TableSchema')
const User = require("../models/UserSchema")
const Product = require('../models/ProductSchema')

const createResponse = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const createOrder = async (req, res) => {
    const { userid, productid, tableNumber } = req.body;

    try {
        const user = await User.findById(userid);
        const table = await Table.findOne({ tableNumber: tableNumber });
        const product = await Product.findById(productid);

        console.log("user:" + user, "table:" + table, "product:" + product);

        if (!user || !table || !product) {
            createResponse(res, 400, { "hata": "Sipariş oluşturulamadı." });
        } else {
            try {
                const order = await Order.create({
                    user: user,
                    product: product,
                    date: new Date(),
                    table: table,
                });

                const updatedTable = await Table.findOneAndUpdate(
                    { tableNumber: tableNumber },
                    { 
                        status: 'Dolu',
                        order: order._id // Order ID'yi doğrudan ekliyoruz
                    },
                    { new: true }
                );

                console.log(order);
                console.log("Updated Table:", updatedTable);
                createResponse(res, 201, order);
            } catch (error) {
                createResponse(res, 400, { "hata": "Sipariş oluşturulamadı." });
            }
        }
    } catch (error) {
        createResponse(res, 400, error);
    }
};


const deleteOrder = async (req, res) => {
    const orderid = req.params.orderid

    try {
        const order = await Order.deleteOne({ _id: orderid })

        if (order.deletedCount === 0) {
            createResponse(res, 404, { "hata": "Sipariş bulunamadı." })
        } else {
            createResponse(res, 200, { "mesaj": "Sipariş başarıyla silindi." });

        }
    } catch (error) {
        createResponse(res, 400, error);

    }
}

const viewOrderStatus = async (req, res) => {
    const orderid = req.params.orderid

    try {
        const order = await Order.findById(orderid)
        createResponse(res, 200, { "mesaj": order.status })
    } catch (error) {
        createResponse(res, 404, error)
    }
}

const updateOrderStatus = async (req, res) => {
    const orderid = req.params.orderid
    const status = req.body.status

    try {
        const order = await Order.findById(orderid)
        order.status = status
        order.save();
        createResponse(res, 200, order);

    } catch (error) {
        createResponse(res, 400, error)
    }
}

const getOrder = async (req, res) => {
    const orderid = req.params.orderid;

    try {
        const order = await Order.findById(orderid)
        console.log(order)
        if (!order) {
            createResponse(res, 404, { "hata": "Sipariş bulunamadı" })
        } else {
            createResponse(res, 200, order)
        }

        createResponse(res, 200, order)
    } catch (error) {
        createResponse(res, 400, error)
    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        createResponse(res, 200, orders)
    } catch (error) {
        createResponse(res, 404, error)
    }
}


module.exports = {
    createOrder,
    deleteOrder,
    viewOrderStatus,
    updateOrderStatus,
    getOrder,
    getAllOrders

}