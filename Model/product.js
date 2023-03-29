// JavaScript source code
const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;


const product = new Schema({
    name: String,
    desc: String,
    price: Number,
   
});

const MyModel = mongoose.model('CafeP', product);


module.exports = MyModel;