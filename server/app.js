const dotenv = require('dotenv');
// const mongoose = require('mongoose'); 
const express = require('express');
const app = express();

dotenv.config({path: `./config.env`})

require('./db/conn');
app.use(express.json());
// const User = require('./model/userSchema')

app.use(require('./router/auth'))

const PORT = process.env.PORT;




// middleware
const middleWare = (req, res, next)=>{
console.log("middleware");
next();
}
// app.get('/', (req, res) => {
//     res.send("hello from server !");
// });

// app.get('/register', (req, res) => {
//     res.send("register from server !"); 
// });

app.get('/about' , middleWare, (req, res) => {
    console.log("about");
    res.send("about from server !");
    
});

app.get('/contact', (req, res) => {
    res.send("hello from server !");
});

app.listen(PORT, () => {
    console.log("server is running on 5000");
})