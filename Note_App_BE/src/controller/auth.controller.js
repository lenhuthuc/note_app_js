const authService = require('../service/auth.service');
const {GenerateToken} = require('../utils/token');

exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await authService.RegisterUser(name, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(404).json({
            error: error.message
        });
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await authService.Login(email, password);
        const token = GenerateToken(user);
        res.status(201).json({
            token,
            user
        });
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}