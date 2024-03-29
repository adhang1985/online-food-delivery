const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "hvaghsfa56ghashaj7a8yuahbauyauga";

// login user
const loginUser = async(req,res) => {
    try {
        const userEmail = req.body.email;
        const userCreds = await User.findOne({email:userEmail});
        if(userCreds){
            const isValidPassword = await bcrypt.compare(req.body.password,userCreds.password);
            const userId = {
                id : userCreds._id
            }
            if(isValidPassword){
                const token = jwt.sign(userId,JWT_SECRET);
                res.status(200).json({message:'Valid user',access_token:token,status:"success"});
            }
            else{
                res.status(401).json({message:'Authentication failed!'});
            }
        }
        else{
            res.status(401).json({message:'Authentication failed!'});
        }
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

module.exports = loginUser;