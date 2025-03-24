import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import userRouter  from "./routs/user.routes.js"

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}))
app.use(cookieParser())
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use("/user", userRouter);
export {app};