import express, { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./config";
;
const app=express();

export function auth(req:Request,res:Response,next:NextFunction){
    const header=req.headers["authorization"];

    if(!header){
        return res.status(401).json({
            msg:""
        })
    }

    try {
        const decoded= jwt.verify(header as string,JWT_SECRET_KEY) as {id:string};
        if(decoded){
            req.userId=decoded.id;
            next()
        }
        else{
            return res.status(401).json({
                msg:'you are not logged in'
            })
        }
    } catch (error) {
        return res.status(411).json({
            msg:"error occured"
        })
    }
}