import { Router } from "express";
import { getResults, logout, singUp, userLogin } from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";
const router = Router();

// for login user
router.route("/login").post(userLogin)

// router.route("/testSession").get(verifyUser,)
router.route("/signup").post(singUp);


// to get the sessino results

router.route("/performance").get( verifyUser,getResults);

// to logout user
router.route("/logout").get(verifyUser,logout)

export default router;