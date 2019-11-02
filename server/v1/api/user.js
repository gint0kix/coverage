const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const validate = require('../validation/register_validation');
const jwt = require('jsonwebtoken');
const config = require('config');
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
    //Validates given parameters, by checking if there are any empty strings or special characters
    const {errors,result,isValid} = validate(req.body);
    if(!isValid){
        return res.status(400).json({message:errors})
    }
    else{
        //Deconstruct the validated req
        const{publicName,userName,password}=result;
        //Checks if userName is already being used
        User.findOne({userName})
        .then( 
            user=>{
                if(user){res.status(400).json({message:"User already exists"})}

        //Create a new user with the 3 given required params
        let newUser = new User({
            publicName:publicName,
            userName:userName,
            password:password
        });
        /*Generates a salt value, with # of rounds, set to 12, the higher the value, the better it is 
        * But will end up taking longer to generate
        * With the current users password, and the generated salt a hash is created and stored in the user
        */ 
        bcrypt.genSalt(12,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err){throw err;}
                newUser.password=hash;
                newUser
                .save()
                .then(user=>{res.status(201).json(user)})
                .catch(err=>res.status(400).json(err));
            })
            
        })})
    }
});

//  @route GET v1/api/user
//  @desc GET All users
//  @access Private
router.post('/login',(req, res)=>{
    //Validates given parameters, by checking if there are any empty strings or special characters
    const {errors,result,isValid} = validate(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    else{
        const{publicName,userName,password}=result;
        User.findOne({userName:userName}).then(user=>{
            if(!user){res.status(404).json({message:"User Not Found"})}
            bcrypt.compare(password,user.password).then(match=>{
                if(match){
                    const payLoad={
                        id:user.id,
                        userName: user.userName
                    };
                    jwt.sign(
                        payLoad,
                        config.get('JWT_SECERT'),
                        {expiresIn:config.get("JWT_EXPIRE")},
                        (err,token)=>{res.json({success:true,token:"Bearer"+token});}
                        );

                }
                else{
                    return res.status(400).json({message:"Incorrect Password"});
                }
            })
        })
    }
});

module.exports = router;