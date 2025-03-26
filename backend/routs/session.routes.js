import { Router } from "express";   
import { verifyUser } from "../middlewares/auth.middleware";
const router = Router();

router.route("/").post(verifyUser,)