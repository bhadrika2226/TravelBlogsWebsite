const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // For hashing passwords
const User = require('../models/userModel'); // Import the User model

// Create a new user
router.register=async (req, res) => {
  try {
    const { userName, password, fullName, email } = req.body;
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      password: hashedPassword,
      fullName,
      email,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Authenticate a user (login)
router.login=async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    // You can generate and send a JWT (JSON Web Token) here for user authentication.
    // For simplicity, it's not included in this example.
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '2h', // Token expiration time (adjust as needed)
    });

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Retrieve user information
router.getProfile=async (req, res) => {
  try {
    const { userName } = req.params;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Remove the password field before sending user information
    const { password, ...userInfo } = user._doc;
    res.json(userInfo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = router;
