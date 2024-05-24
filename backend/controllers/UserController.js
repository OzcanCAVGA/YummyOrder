const User = require("../models/UserSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const { createToken } = require('../utils/jwtUtilis')

const createResponse = function (res, status, content) {
    res
        .status(status)
        .json(content);
}
const merhaba = (req, res) => {
    getResponse(res, 200, { "mesaj": "123" })
    return;
}


const register = async (req, res) => {


    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const telephoneNumber = req.body.phoneNumber


    if (!firstName || !lastName || !email || !password || !telephoneNumber) {
        createResponse(res, 400, { "hata": "Tüm alanlar gereklidir." })
        return
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ firstName, lastName, email, password: hashedPassword, telephoneNumber });
        await user.save();

        const token = createToken(user);

        res.status(201).send({ token, message: "Kullanıcı başarıyla oluşturuldu." })
    } catch (error) {
        res.status(500).json({ error: "Kullanıcı oluşturulamadı.", details: error.message });
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email ve şifre gereklidir." })
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "Email ya da şifre hatalı" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ error: "Email ya da şifre hatalı." });
        }

        const token = createToken(user);
        createResponse(res, 200, { "token": token })
    } catch (error) {
        createResponse(res, 500, { "Hata": "Giris yapılamadı ", details: error.message })
    }

}

const getUserById = async (req, res) => {
    const userid = req.params.userid

    try {
        const user = await User.findById(userid)
        if (!user) {
            createResponse(res, 404, { "hata": "Kullanıcı bulunamadı." })
        } else {
            createResponse(res, 200, user)
        }
    } catch (error) {
        createResponse(res, 404, error)
    }

}

const getAllUsers = async (req, res) => {
    try {
        console.log("burada 1")
        const users = await User.find();
        createResponse(res, 200, users)
    } catch (error) {
        createResponse(res, 400, error)
        console.log("burada 2")
    }
}

const updateUser = async (req, res) => {
    const userid = req.params.userid;

    //otorite yapilacak{
    const { firstName, lastName, email, telephoneNumber } = req.body

    if (!firstName || !lastName || !email || !telephoneNumber) {
        createResponse(res, 400, { "hata": "Tüm alanlar doldurun." })
        return;
    } else {
        try {
            const user = await User.findById(userid);
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.telephoneNumber = telephoneNumber;
            try {
                await user.save()
                createResponse(res, 200, user)
            } catch (error) {
                createResponse(res, 400, error)
            }
        } catch (error) {
            createResponse(res, 400, error)
        }
    }
    // }
}

const deleteUser = async (req, res) => {
    const userid = req.params.userid

    try {
        const user = await User.deleteOne({ _id: userid })

        if (user.deletedCount === 0) {
            createResponse(res, 404, { "hata": "Kullanıcı bulunamadı." })
        } else {
            createResponse(res, 200, { "mesaj": "Kullanıcı başarıyla silindi." });

        }
    } catch (error) {
        createResponse(res, 400, error);

    }
}

module.exports = {
    merhaba,
    register,
    login,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
}