const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({error:'Something went wrong! Try again.'});
        };
        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS));
        const user = await User.create({
            username,
            hashedPassword
        });
        return res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: 'Something went wrong! Try again.' });
    };
});

module.exports = router;