import {app} from "./app.js"
import dotenv from "dotenv"
import dbConnect from "./db/dbConnection.js"
import {Server} from "socket.io"
import http from "http"
import cors from "cors"
import jwt from "jsonwebtoken"
import { verifyUser } from "./middlewares/auth.middleware.js"
import { User } from "./models/user.model.js"

dotenv.config({
    path: "./.env"
})
dbConnect().then(()=>{
    const server = http.createServer(app);
    const io = Server(server, {
        cors:{
            origin: process.env.CORS_ORIGIN, 
            Credential: true
        }
    })
    io.use(async(socket, next)=>{
       try {
         const token = socket.handshake.auth.token;
         if(!token) {
             return next(new Error("no token found"))
         }
         const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
         const user = await User.findById(decoded._id).select("-password")
         if(!user){
             return next(new Error("user is not found"))
         }
         socket.user = user;
         next();
       } catch (error) {
        return next(new Error("user is Unathurized"))
       }
    })
    io.on("connection", socket=>{
        socket.on("createSession" , async({roomId, questions, subject})=>{

            socket.emit("sessionCreated", {})
        });

        socket.on("joinSession", async({roomId})=>{
            socket.emit("sessionJoined", {});
        })
        

    })
    server.listen(5000, ()=>{
        console.log("app is listning on port 5000")
    })
    
}).catch((error)=>{
    console.log("error while connecting database ", error)
})

// app.get("/" ,(req, res)=>{
//             res.send("hi you are on right port")
//         })
//         app.listen(5000, ()=>{
//             console.log("app is listning on port 5000")
//         })
//         app.on("error", (error)=>{
//             console.log(error)
//         })