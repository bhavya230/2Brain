import mongoose  from "mongoose";
import 'dotenv/config'
const Schema=mongoose.Schema;
const MONGO_URL=process.env.MONGO_URL;

if(!MONGO_URL){
    throw new Error("mongo url undefined")
}

mongoose.connect(MONGO_URL);
const ObjectId= mongoose.Types.ObjectId;

//creating mongoose schemas-------

//USER SCHEMA
const UsersSchema=new Schema({
    username:{type:String,unique:true},
    password:String 
})
export const UsersModel=mongoose.model("users",UsersSchema);

//TAG SCHEMA
const TagSchema=new Schema({
    title:String
})
export const TagModel=mongoose.model("tag",TagSchema);

//CONTENT SCHEMA
const ContentSchema= new Schema({
    title:String,
    link:String,
    tags:[{type:ObjectId, ref:"tag"}],
    userId:{type:ObjectId , ref:"users", required:true}
})
export const ContentModel=mongoose.model("content",ContentSchema);