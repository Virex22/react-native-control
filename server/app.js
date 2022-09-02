require('dotenv').config();

const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user');

const app = express();
app.use(require("express").json());
app.use(cors({
    origin : ['http://localhost:8080','http://127.0.0.1:8080']
}))

app.use('/user', userRoute);

app.use('/ping',(req,res) =>{
    res.status(200).send("Test OK");
})



module.exports = app;