const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const validate = require('../validation/register_validation');
const jwt = require('jsonwebtoken');
const config = require('config');
const Shift = require('../models/Shift_Request');

// @route GET api/shift_request
// @desc Get all shift_requests
// @access Public
router.get('/',(req,res)=>{
    Shift.find()
        .sort({date:-1})
        .then(shifts=>res.json(shifts))
});

// @route POST api/shift_request
// @desc Create a new shift_request
// @access public
router.post('/',(req,res)=>{
    const newRequest = new Shift({
        company:req.body.company,
        storeNumber:req.body.storeNumber,
        Shift:req.body.shift,
        Poster:req.body.Poster
    });
    newRequest.save().then(shift=>res.json(shift));
});

module.exports=router;