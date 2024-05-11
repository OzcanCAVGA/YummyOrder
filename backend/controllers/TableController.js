const User = require("./UserSchema")
const Order = require('./OrderSchema')

const getResponse = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const tableAdd = async (req, res) => {
    const { name, tableNumber, status } = req.body
}

module.exports = {
    tableAdd,
}