import { Router } from "express";
import { userLogin } from "../controllers/user.controller.js";
const router = Router();

// for login user
router.route("/login").post(userLogin)


