const NoteService = require('../service/note.service');
exports.CreateNote = async (req, res) => {
    const {title, text} = req.body;
    const userId = req.user.id;
    try {
        const item = await NoteService.CreateNote(title, text, userId);
        res.status(201).json(item);
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
} 

exports.UpdateNote = async (req, res) => {
    const {text} = req.body;
    const idNote = req.params.id;
    const idUser = req.user.id;
    try {
        const item = await NoteService.UpdateNote(idNote, idUser, text);
        if(!item.success) return res.status(404).json({
            message: 'fail change'
        })
        return res.status(201).json({
            message: (item.change)? 'has changed' : 'no has changed'
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

exports.DeleteNote = async (req, res) => {
    const idNote = req.params.id;
    const idUser = req.user.id;
    try {
        const result = await NoteService.DeleteNote(idNote, idUser);
        if(!result) return res.status(400).json({
            message: 'fail delete'
        })
        else return res.status(200).json({
            message: 'complete delete'
        })
    } catch (error) {
        res.status(400).json({
            message: 'fail delete'
        })
    }
}

exports.getMainInterface = async (req, res) => {
    const id = req.user.id;
    try {
        const user = await NoteService.getMainInterface(id);
        if(!user) return res.status(400).json({
            message: 'Not exiting'
        })
        return res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: 'Not found'
        })
    }
}

