const {dataModel,voteModel} = require("../models/models");


const getData = async(req,res)=>{
    let obj =await voteModel.find();
    res.send(obj)
}
const postData =async (req,res) => {
    console.log(req.body.name)
   let obj =  voteModel({
    name:req.body.name,
    upvote:0,
    downvote:0
   })
   let resonse =await obj.save();
   res.send(resonse)
}

const updateData = async(req,res) => {
    console.log("name" , req.params.name,"upvote",req.body.upvote)
    let response =await voteModel.updateOne({name:req.params.name},req.body)
    res.send(response)
}

module.exports = {
    postData,
    updateData,
    getData
}