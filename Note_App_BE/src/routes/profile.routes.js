const express = require('express');
const router = express.Router();
const ProfileController = require('../controller/profile.controller');
const { authMiddlewares } = require('../middlewares/auth.middlewares');
router.get('/profile', authMiddlewares, ProfileController.getProfile);

module.exports = router;