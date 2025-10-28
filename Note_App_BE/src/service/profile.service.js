const db = require('../models/db');

exports.getProFile = async (id) => {
    const [result] = await db.query('select * from user where IdUser = ?',[id]);
    const user = result[0];
    if(!user) {
        throw new Error('User not found');
    }
    return {
        id: user.IdUser,
        name: user.Name,
        email: user.Email
    }
}