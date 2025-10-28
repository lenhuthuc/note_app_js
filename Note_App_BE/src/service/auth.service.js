const db = require('../models/db');
const bcrypt = require('bcrypt');

exports.RegisterUser = async (name, email, password) => {
    const [exitting] = await db.query(
        'SELECT * FROM user WHERE email = ?',
        [email]
    );
    if(exitting.length > 0) {
        throw new Error('Email đã được sử dụng');
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query(
        'INSERT INTO user (Name, Email, Password) VALUE (?, ?, ?)',
        [name, email, hashPassword]
    );
    return {id: result.insertId};
}

exports.Login = async (email, password) => {
    const [result] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
    const user = result[0];
    if(!user) {
        return {
            error: "email khong ton tai"
        }
    }
    const isMatch = await bcrypt.compare(password, user.Password);
    if(!isMatch) return {
        error: "mat khau sai"
    }
    return {id: user.IdUser};
}

