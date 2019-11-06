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
    Shift:{
        Start:{
            type:Date,
            required: true
        },
        End:{
            type:Date,
            required:true
        },
        required: true   
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
    }
});

module.exports = User = mongoose.model('shift_request',ShiftRequestSchema);
