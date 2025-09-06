import 'dotenv/config'
if(!process.env.JWT_SECRET_KEY){
    throw new Error("mongo url undefined")
}
export const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;