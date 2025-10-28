const ProfileService = require('../service/profile.service');

exports.getProfile = async (req, res) => {
    const id = req.user.id;
    try {
        const user = await ProfileService.getProFile(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({
            message: 'Not found'
        })
    }
}