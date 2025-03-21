import express from "express";
import http from "http";
import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})

const app = express();
const server = http.createServer(app);
server.listen(3000, () => { console.log("Server is running on port 3000") });