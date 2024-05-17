const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

function createToken(user) {
    const tokenDuration = '1h';

    const payload = {
        userId: user._id,
        email: user.email,
        authority: user.authority
    }

    const token = jwt.sign(payload, secretKey, { expiresIn: tokenDuration });

    return token;
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) return reject(err);
            resolve(decoded)
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}