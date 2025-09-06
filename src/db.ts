import mongoose  from "mongoose";
import { MONGO_URL } from "./config";
const Schema=mongoose.Schema;

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