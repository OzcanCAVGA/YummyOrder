const UserSchema = require("../models/UserSchema");

const getResponse = function (res, status, content) {
    res
        .status(status)
        .json(content);
}
const merhaba = (req, res) => {
    getResponse(res,200,{"mesaj":"123"})
    return;
}

const register = (req, res) => {
    //kullanici adi
    //sifre
    //telefon numarasi

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const telephoneNumber = req.body.telephoneNumber;

    if (!firstName || !lastName || !email || !password || !telephoneNumber) {
        getResponse(res, 400, { "hata": "Tüm alanlar gereklidir." })
    }
    UserSchema.create({
        firstName,
        lastName,
        email,
        telephoneNumber,
    })
        .then(user => {
            user.createPassword(password);
            user.save()
                .then(response=>{
                    
                })
        })



}

module.exports = {
    register,
    merhaba
}