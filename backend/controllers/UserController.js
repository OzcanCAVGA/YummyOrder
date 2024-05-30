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
    const phoneNumber = req.body.phoneNumber


    if (!firstName || !lastName || !email || !password || !phoneNumber) {
        createResponse(res, 400, { "hata": "Tüm alanlar gereklidir." })
        return
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ firstName, lastName, email, password: hashedPassword, phoneNumber });
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

const loggedInUser = async (req, res) => {
    try {
        if (!req.auth) {
            console.log('User not authenticated. req.user:', req.auth);  // Debug: req.user yoksa log yazdır
            return res.status(401).json({ error: 'User not authenticated.' });
        }
        console.log('Dogrulanmis kullanici(UserController): ', req.auth);
        const userid = req.auth.userId;  // Burada userId kullanılıyor, payload'daki key kontrol edilmeli
        if (!userid) {
            console.log("Kullanici kimligi bulunamadi(UserController)")
            return res.status(400).json({ error: "Kullanici kimligi bulunamadi" })
        }
        const user = await User.findById(userid)
        if (!user) {
            console.log("Kullanici bulunamadi.(UserController)")
            return res.status(404).json({ error: "Kullanici bulunamadi" })
        }
        res.status(200).json(user)

    } catch (error) {
        console.log('Error:', error);  // Debug: Hata mesajını yazdır
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



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
    console.log("(UserController)userid::::::", userid)
    console.log("(UserController)req.auth._id::::::::", req.auth.userId)
    if (userid === req.auth.userId) {
        const { firstName, lastName, email, phoneNumber } = req.body;

        if (!firstName || !lastName || !email || !phoneNumber) {
            return createResponse(res, 400, { "hata": "Tüm alanlar doldurun." });
        }

        try {
            const user = await User.findById(userid);
            if (!user) {
                return createResponse(res, 404, { "hata": "Kullanıcı bulunamadı." });
            }

            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.phoneNumber = phoneNumber;

            await user.save();
            return createResponse(res, 200, user);
        } catch (error) {
            return createResponse(res, 500, { "hata": "Sunucu hatası." });
        }
    } else {
        return createResponse(res, 403, { "hata": "Yetkisiz erişim." });
    }
};

const updatePassword = async (req, res) => {
    const userid = req.auth.userId;
    console.log("(UserController updatePassword)userId:::::::", userid)
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        return createResponse(res, 400, { "hata": "Hem eski şifre hem de yeni şifre gereklidir." });
    }

    try {
        const user = await User.findById(userid)
        if (!user) {
            return createResponse(res, 404, { "hata": "Kullanıcı bulunamadı." });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password)
        if (!isMatch) {
            return createResponse(res, 400, { "hata": "Eski sifre hatali" })
        } else if (isMatch) {
            return createResponse(res, 200, { "mesaj": "eski sifre dogru" })
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        return createResponse(res, 200, { "mesaj": "Sifre basariyla guncellendi" })
    } catch (error) {
        return createResponse(res, 500, { "hata": "Sunucu hatasi." })
    }

}

const deleteUser = async (req, res) => {
    const userid = req.params.userId

    try {
        const user = await User.deleteOne({ userId: userid })

        if (user.deletedCount === 0) {
            createResponse(res, 404, { "hata": "Kullanıcı bulunamadı." })
            return;
        } else {
            createResponse(res, 200, { "mesaj": "Kullanıcı başarıyla silindi." });
            return;


        }
    } catch (error) {
        createResponse(res, 400, error);
    }
}

module.exports = {
    merhaba,
    register,
    login,
    loggedInUser,
    getUserById,
    getAllUsers,
    updateUser,
    updatePassword,
    deleteUser,
}