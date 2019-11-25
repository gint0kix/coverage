const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    publicName:{
        type:String,
        required: true
    },
    homeStoreNum:{
        type: Number,
        required: true
    },
    company:{
        type:String,
        required: true
    },
    requested_shifts:{
        type: Array
    },
    taken_shifts:{
        type: Array
    } 
    
});

module.exports = User = mongoose.model('user',UserSchema);
