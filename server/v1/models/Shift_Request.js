const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ShiftRequestSchema = new Schema({
    Company:{
        type: String,
        required: true
    },
    StoreNumber:{
        type: Number,
        required: true
    },
    ShiftStart:{
        type: Date,
        required: true 
    },
    ShiftEnd:{
        type:Date,
        required:true
    },
    Description:{
        type: String
    },
    Poster:{
        type: String,
        required: true
    },
    DatePosted:{
        type:Date,
        default: Date.now
    },
    Taken:{
        type:Boolean,
        default:false
    }
});

module.exports = User = mongoose.model('shift_request',ShiftRequestSchema);
