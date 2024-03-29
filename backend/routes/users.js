const express = require('express');
const { createUser } = require('../controllers/users');
const { body, validationResult } = require('express-validator');
const route = express.Router();

route.post('/',
body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({min:5})
    .withMessage("Name must have atleast 5 characters"),

body("email")
.trim()
.notEmpty()
.withMessage("Email is required")
.isEmail()
.withMessage('Not a valid email'),

    (req,res,next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        next();
    },
createUser);


module.exports = route;