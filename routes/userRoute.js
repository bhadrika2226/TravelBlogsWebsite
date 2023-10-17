const express = require('express');
const router = express.Router();
//Imported userControllers
const {register,login,getProfile} = require('../controller/userController');

// Register a new user
router.post('/register',register);

// Login a user
router.post('/login',login);

// Get user profile
router.get('/profile/:userName',getProfile);

module.exports = router;
