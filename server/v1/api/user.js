const express = require('express');
const router = express.Router();
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
    User.find()
        .sort({date: -1})
        .then(users=> res.json(users))
});

module.exports = router;