const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app=express();

//Body-parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//db Config
const db = require('../config/keys.js').mongoURI;
//connect to Mongo

mongoose
    .connect(db,{useNewUrlParser: true,useUnifiedTopology:true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Port 
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server startd on port ${port}`));