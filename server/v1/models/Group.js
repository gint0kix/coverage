const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const GroupSchema = new Schema({
    storeNumber:{
        type: Number,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    groupOwner:{
        type:String,
        required: true
    },
    groupMembers:{
        type: Array,
        required: true
    }
})
module.exports = User = mongoose.model('group',GroupSchema);