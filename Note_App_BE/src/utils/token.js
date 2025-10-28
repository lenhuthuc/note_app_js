const jwt = require('jsonwebtoken');
const secrect = process.env.JWT_SECRET;

exports.GenerateToken = (payload) => {
    return jwt.sign(payload, secrect, {expiresIn: '1d'});
}

exports.VerifyToken = (token) => {
    return jwt.verify(token, secrect);
}