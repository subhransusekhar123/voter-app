const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name:{
        type:String
    },
    file:{
        type:String
    }
})

const voteSchema = mongoose.Schema({
    name:{
        type:String
    },
    upvote:{
        type:Number
    },
    downvote:{
        type:Number
    }
})

const dataModel = mongoose.model('vote',dataSchema);
const voteModel = mongoose.model("voteCount",voteSchema)

module.exports = {dataModel,voteModel};