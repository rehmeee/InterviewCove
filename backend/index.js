import { app } from "./app.js"
import dotenv from "dotenv"
import dbConnect from "./db/dbConnection.js"
import { Server } from "socket.io"
import http from "http"
import cors from "cors"
import jwt from "jsonwebtoken"
import { verifyUser } from "./middlewares/auth.middleware.js"
import { User } from "./models/user.model.js"
import { createSession } from "./utils/createSession.js"
import { updateSession } from "./utils/updateSessionRecord.js"
import { socketMiddleware } from "./middlewares/socket.middleware.js"
import { collectInfo } from "./utils/collectSessionInfo.js"

dotenv.config({
    path: "./.env"
})
dbConnect().then(() => {
    const server = http.createServer(app);
    const io = Server(server, {
        cors: {
            origin: process.env.CORS_ORIGIN,
            Credential: true
        }
    })

    // middle ware to check either this socket is a valid or not 
    io.use(socketMiddleware)



    io.on("connection", socket => {
        // to create a session 
        socket.on("createSession", async ({ roomId, noOfQuestions, subject }) => {
            const { questions, createdSession } = await createSession(socket.user, roomId, subject, noOfQuestions);

            socket.emit("sessionCreated", { questions, createdSession })
        });

        // when the other user joins session
        socket.on("joinSession", async ({ roomId }) => {
            const user = socket.user;

            // join room
            socket.join(roomId);

            // update the session
            await updateSession(user, roomId);
            socket.to(roomId).emit("user_joined", { user });

            // to get the question and session details 
            const session = await collectInfo(roomId);
            
            socket.emit("sessionJoined", {session});
        })


        // to send message to the other user 

        socket.on("send_message", (message, roomId) => {
            socket.to(roomId).emit("message", { message });
        })




    });

    server.listen(5000, () => {
        console.log("app is listning on port 5000")
    })

}).catch((error) => {
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