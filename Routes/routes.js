
const express = require('express');
const product = require('../model/product.js');
const user = require('../model/User.js');
const router = express.Router();
 router.get('/',async (req, res) => {
    console.log('hello')
    
    res.json({ mss: "hello" }) 
});
/*
router.post('/signup', async (req, res) => {
    const { name, email } = req.body
    try {
        const user = await User.create({ name, email })
        res.status(200).json(user)

    } catch (error) {
        console.log(error)

    }
});*/

router.post('/order', async (req, res) => {
    const { product } = req.body
    if (req.session.user)
        res.status(200).json(req.session );
    else {
        res.status(400).json({ mss: "no-user-loggedin" });
    }

   


});
router.post('/products', async (req, res) => {
    const { desc } = req.body
    if (desc == null) {
        console.log("return all");
    }
    
    try {
        const produc = await product.find({ "desc": new RegExp(desc, 'i') }); 
        res.status(200).json(produc);

    } catch (error) {
        console.log(error);

    }


});
router.post('/sign-up', async (req, res) => {
    const { fname,
        email,
        lname,
        password } = req.body;
    

    try {
        const produc = await user.create({
            fname,
            email,
            lname,
            password
});
        res.status(200).json(produc);

    } catch (error) {
        console.log(error);

    }


});
router.post('/Login', async (req, res) => {
    const { 
        email,
        password } = req.body;

    
    try {
        const produc = await user.findOne({ email: email }, (err, data) => {
            if (err) {
                console.log(err);
                res.status(400);
            }
            else {
                console.log(data);
                if (data === null) {
                    return res.status(200).json({mss:"Incorrect"})
                }
                if (password === data.password) {
                    req.session.user = data;
                    console.log(req.session);
                    res.status(200).json({
                        mss: "LoginSucces",
                        name: data.fname
                    });
                }
                else {
                    res.status(200).json({ mss: "PIncorrect" });
                }
            }
           

        });
        
   
    } catch (error) {
        console.log(error);

    }


});

        



module.exports =router;
