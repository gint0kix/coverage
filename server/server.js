const express = require('express');
const mongoose = require('mongoose');
const app=express();
const config = require('config');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//db Config
const db = config.get('Backend.MONGOURI');
//connect to Mongo

mongoose
    .connect(db,{useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Port 
const port = config.get('Backend.PORT') || 5000;
//Use Routes
app.use('/api/user',require('./v1/api/user')) ;
app.use('/api/shift_request',require('./v1/api/shift_request'));
app.listen(port,()=> console.log(`Server startd on port ${port}`));