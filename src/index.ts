import express from "express";
import { UsersModel } from "./db";
import jwt from "jsonwebtoken";
const app= express();
const JWT_SECRET_KEY="123"

app.use(express.json());


//signup endpoint
app.post('/api/v1/signup',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    try{
        await UsersModel.create({
        username:username,
        password:password
    })

    res.send("user creaed");

    
    }catch(e){
        res.status(411).json({
            "msg":"error occured"
        })
    }
  
})

//signin endpoint
app.post('/api/v1/signin',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    try {
        const user=await UsersModel.findOne({
            username:username,
            password:password
        })

        if(!user){
            return res.status(411).send("user does not exist")
        }

        //genertaimg and sending token
        const token= jwt.sign({
            id:user._id
        },JWT_SECRET_KEY)

        return res.json({
            token:token
        })
    } catch (error) {
        res.status(411).json({
            msg:"error occured"
        })
    }
})

//add new content 
app.post('/api/v1/content',(req,res)=>{})

// fetching existing content
app.get('/api/v1/content',(req,res)=>{})

//delete content
app.delete('/api/v1/content',(req,res)=>{})

// create shareable link for your second brain
app.post('/api/v1/brain/share',(req,res)=>{})

//fetching another users brain content
app.get('/api/v1/brain/:shareLink',(req,res)=>{})

app.listen(5000)