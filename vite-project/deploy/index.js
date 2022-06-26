require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const path = require('path')

app.use(express.static("dist"))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"dist","index.html"))
})

app.listen(port,(req,res)=> {
    console.log('connected...')
})