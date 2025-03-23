import {app} from "./app.js"
import dotenv from "dotenv"
import dbConnect from "./db/dbConnection.js"
dotenv.config({
    path: "./.env"
})
dbConnect().then(()=>{
    app.get("/" ,(req, res)=>{
        res.send("hi you are on right port")
    })
    app.listen(5000, ()=>{
        console.log("app is listning on port 5000")
    })
    app.on("error", (error)=>{
        console.log(error)
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