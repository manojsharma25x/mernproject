const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');




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
        }else if (password != confirmpassword){
            return res.status(422).json({ error: "password not matched" });
        }else{
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

    try{
        const {email,password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill !" });
        }
        const userLogin = await User.findOne({email});
        console.log(userLogin);
        if(!userLogin){
            res.status(400).json({error : "error"})
        }
        else{
            res.json({message : "login sccs"});
        }

    }catch (error) {
        console.log(error);
    }
});

module.exports = router;