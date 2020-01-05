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
        Company:req.body.company,
        StoreNumber:req.body.storeNumber,
        Description:req.body.Description,
        ShiftStart:req.body.ShiftStart,
        ShiftEnd:req.body.ShiftEnd,
        Poster:req.body.Poster
    });
    newRequest.save().then(shift=>res.json(shift));
});

//  @route DELETE api/shift_request
//  @desc Delete a shift_request
//  @access private
router.delete('/:id',(req,res)=>{
    Shift.findById(req.param.id)
    .then(shift=>shift.remove().then(()=>res.json({sucess:true})))
    .catch(err=>res.status(404).json({sucess:false,message:"shift doesn't exist",error:err}))
    });

// @route POST api/shift_request
// @desc Updates a specific request as taken or not taken
router.post('/:id',(req,res)=>{
    Shift.findByIdAndUpdate(req.param.id,req.param.update);
})

module.exports=router;