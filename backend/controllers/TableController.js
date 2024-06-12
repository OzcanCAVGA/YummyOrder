const Table = require('../models/TableSchema')
const User = require("../models/UserSchema")
const Order = require('../models/OrderSchema')

const createResponse = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const addTable = async (req, res) => {
    const { name, tableNumber } = req.body

    if (!name || !tableNumber || !qrcode) {
        createResponse(res, 400, { "hata": "Tüm alanlar doldurun." })
        return;
    }

    try {
        const handleTable = await Table.findOne({ name: name })

        if (handleTable) {
            createResponse(res, 400, { "hata": "Bu isimde bir masa mevcut" })
        }
        else {
            const table = await Table.create({
                name,
               tableNumber,
                // qrcode,
            })
            createResponse(res, 201, table)

        }
    } catch (error) {
        createResponse(res, 400, error);
    }

}

const getTableById = async (req, res) => {
    const tableid = req.params.tableid

    try {
        const table = await Table.findById(tableid)

        if (!table) {
            createResponse(res, 404, { "hata": "Masa bulunamadı." })
        }
        else {
            createResponse(res, 200, table)

        }
    } catch (error) {
        createResponse(res, 400, error);
    }
}

const updateTable = async (req, res) => {
    const tableid = req.params.tableid;

    // otorite yapilacak {
    const { name, tableNumber, qrcode } = req.body
    if (!name || !tableNumber || !qrcode) {
        createResponse(res, 400, { "hata": "Tüm alanlar doldurun." })
        return;
    }
    else {
        try {
            const table = await Table.findById(tableid)
            table.name = name;
            table.tableNumber = tableNumber;
            table.qrcode = qrcode

            try {
                await table.save()
                createResponse(res, 200, table)
            } catch (error) {
                createResponse(res, 400, error);
            }

        } catch (error) {
            createResponse(res, 400, error)

        }
    }
    // } 
}

const changeStatus = async (req, res) => {
    const tableid = req.params.tableid
    const status = req.body.status;

    try {
        const table = await Table.findById(tableid)
        table.status = status

        try {
            await table.save()
            createResponse(res, 200, table)
        } catch (error) {
            createResponse(res, 400, error);
        }


    } catch (error) {
        createResponse(res, 400, error);
    }
}

const takeSeat = async (req, res) => {
    const tableid = req.params.tableid
    const userid = req.body.userid


    try {
        const table = await Table.findById(tableid);
        try {
            const user = await User.findById(userid)
            table.user = user;
            user.table = table;
            table.status = "Dolu"
            try {
                await table.save()
                await user.save()
                createResponse(res, 200, table)
            } catch (error) {
                createResponse(res, 400, error);
            }
        } catch (error) {
            createResponse(res, 400, error);
        }
    } catch (error) {
        createResponse(res, 400, error);
    }
}

const deleteTable = async (req, res) => {
    const tableid = req.params.tableid

    try {
        const table = await Table.deleteOne({ _id: tableid })

        if (table.deletedCount === 0) {
            createResponse(res, 404, { "hata": "Masa bulunamadı." })
        } else {
            createResponse(res, 200, { "mesaj": "Masa başarıyla silindi." });

        }
    } catch (error) {
        createResponse(res, 400, error);

    }

}

const getAllTables = async (req, res) => {
    try {
        const tables = await Table.find()
        createResponse(res, 200, tables);

    } catch (error) {
        createResponse(res, 400, error);

    }
}



module.exports = {
    addTable,
    getTableById,
    updateTable,
    changeStatus,
    takeSeat,
    deleteTable,
    getAllTables,
}