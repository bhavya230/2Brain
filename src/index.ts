import express from "express";
const app= express();

app.use(express.json());


//signup endpoint
app.post('/api/v1/signup',(req,res)=>{})

//signin endpoint
app.post('/a[i/v1/signin',(req,res)=>{})

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