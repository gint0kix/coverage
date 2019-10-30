const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const validate = require('../validation/register_validation');
//User Model
const User = require('../models/User');

//  @route GET v1/api/user
//  @desc tests user route
router.get('/test',(req,res)=>{
    res.json({msg: "User Test Route"});
});

//  @route GET api/user
//  @desc GET All users
//  @access Private
router.get('/',(req, res)=>{
    User.find()
        .sort({date: -1})
        .then(users=> res.json(users))
});

//  @route POST v1/route/user/register
//  @desc Create a new user
//  @params {userName, publicName, homeStoreNumber, company}
//  @access private
router.post('/register',(req, res)=>{
    const {publicName,userName,password} = req.body;
    /*input validation, function validate will return a message if the given input is either empty or
    has a special character*/
    
});

module.exports = router;