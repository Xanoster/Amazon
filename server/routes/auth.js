const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

router.post('/signup', async (req, res) => {
    // Signup logic
});

router.post('/login', async (req, res) => {
    // Login logic
});

module.exports = router;
// Fixed expiry