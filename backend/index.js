const express = require('express');
require("dotenv").config()
const app = express();
const cors = require('cors');
const router = require('./Router/router');
const { connectDb } = require('./db/mongooseDB');
const mongo_url = process.env.mongo_url 
const { voteRouter } = require('./Router/voteRouter')


app.use(express.static("./Route/images"))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/Api',router);
app.use('/vote',voteRouter);

app.get('/',(req,res)=>{
    res.send('hey people')
})


app.listen(process.env.PORT,()=>{
    console.log(`host on ${process.env.PORT} `);
})


connectDb(mongo_url)


