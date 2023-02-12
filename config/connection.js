const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
module.exports={
    dbconnect:()=>{
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONG_URI,{
            useNewUrlParser: true, 
        }).then(()=>{
            console.log("database connected successfully")
        }).catch((error)=>{
            console.log("error"+error)
        })
    }
}

