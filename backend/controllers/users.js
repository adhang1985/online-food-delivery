// const { body, validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');

// create user
const createUser = async(req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    try {
        const newUser = new User({
            name : req.body.name,
            email: req.body.email,
            password: hashedPassword,
            location : req.body.location
        });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            data:newUser,
            success : true
        });
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}




module.exports = {createUser};