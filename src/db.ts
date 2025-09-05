import mongoose  from "mongoose";
import 'dotenv/config'
const Schema=mongoose.Schema;
const MONGO_URL=process.env.MONGO_URL;

if(!MONGO_URL){
    throw new Error("mongo url undefined")
}

mongoose.connect(MONGO_URL);
const ObjectId= mongoose.Types.ObjectId;

//creating mongoose schemas
const Users=new Schema({
    username:{type:String,unique:true},
    password:String 
})

export const UsersModel=mongoose.model("users",Users);