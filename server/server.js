const express = require('express');
const mongoose = require('mongoose');
const app=express();
const config = require('config');
//Body-parser Middleware
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
app.use('v1/api/user',require('./v1/api/user')) ;
app.listen(port,()=> console.log(`Server startd on port ${port}`));