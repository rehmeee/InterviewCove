import { Router } from "express";
import { userLogin } from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
const router = Router();

// for login user
router.route("/login").post(userLogin)

router.route("/testSession").get(verifyUser,)


export default router;