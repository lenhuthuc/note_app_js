const db = require('../models/db');

exports.CreateNote = async (title, text, userId) => {
    const [result] = await db.query('insert into note (title, text, IdUser) value (?, ?, ?)',[title, text, userId]);
    return {id: result.insertId}
}

exports.UpdateNote = async (idNote, idUser , text) => {
    const [result] = await db.query('update note set text = ? where IdNote = ? and IdUser = ?',[text, idNote, idUser]);
    return {
        success: result.affectedRows > 0,
        change: result.changedRows > 0
    }
}

exports.DeleteNote = async (idNote, idUser) => {
    const [result] = await db.query('delete from note where IdNote = ? and IdUser = ?',[idNote, idUser]);
    return {
        success: result.affectedRows > 0
    }
}

exports.getMainInterface = async (id) => {
    const [result] = await db.query('select n.* , u.name from note n join user u on n.IdUser = u.IdUser where n.IdUser = ?', [id]);
    return result;
}

