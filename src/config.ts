import 'dotenv/config'
if(!process.env.JWT_SECRET_KEY){
    throw new Error("JWT_SECRET_KEY undefined")
}
export const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;

if(!process.env.MONGO_URL){
    throw new Error("MongoDb URL undefined")
}
export const MONGO_URL=process.env.MONGO_URL;