// JavaScript source code
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Urouter = require('./Routes/routes');
const product = require('./model/product.js');
const session = require('express-session');
const cors =require('cors')
app.get('/', (req, res) => {
    res.send("fdsf");

})

mongoose.connect('mongodb+srv://utkarsh:AvNYlRg1wkuKwUM7@cluster.uwudm9u.mongodb.net/test')
    .then(() => {
        console.log('data');
       
    })
    .catch((error) => {
        console.log(error)
    })
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge:99000
    }
}));
app.use((req, res, next) => {
    console.log(req.session);
    next();

})
app.use('/user', Urouter);


app.listen(4000, () => {
    console.log('listening')
})