const mongoose = require('mongoose');
const connectDb = async(URL) =>{
    await mongoose.connect(URL)
    .then(()=>{
        console.log('connected')
    })
    .catch((err)=>{
        console.log(err)

    })
}

module.exports = {connectDb:connectDb}