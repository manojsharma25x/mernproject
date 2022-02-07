const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    },
    confirmpassword :{
        type: String,
        required: true
    }
});

userSchema.pre('save',async function(next){
    console.log("hi from pre fnc");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword,12);
    }
   
    next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;
