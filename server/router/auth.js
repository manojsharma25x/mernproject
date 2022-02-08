const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




router.get('/', (req, res) => {
    res.send("router from server !");
});

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, confirmpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !confirmpassword) {
        return res.status(422).json({ error: "plz fill all field to register" });
    }

    try {

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(422).json({ error: "user already exist" });
        } else if (password != confirmpassword) {
            return res.status(422).json({ error: "password not matched" });
        } else {
            const user = new User({ name, email, phone, work, password, confirmpassword });
            // pasword hashing
            await user.save();
            res.status(201).json("succefully registered");
        }


    } catch {
        console.log(err)
    }
});

// login
router.post('/login', async (req, res) => {
    // console.log(req.body);
    // res.json("awsome")

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill !" });
        }
        const userLogin = await User.findOne({ email });
        if (userLogin) {
            // console.log(userLogin);
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAutoToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })
            if (!isMatch) {
                res.status(400).json({ error: "Invalid credential" })
            } else {
                res.json({ message: "login sccs" });
            }
        } else {
            res.status(400).json({ error: "Invalid credential" })
        }


    } catch (error) {
        console.log(error);
    }
});

module.exports = router;