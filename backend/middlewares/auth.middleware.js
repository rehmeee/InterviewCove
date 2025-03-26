import { ApiErrors } from "../utils/apiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"
const verifyUser = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.Header("Authorization").replace("Bearer", "");
        if (!token) {
            throw new ApiErrors(400, "unathorized access")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if (!decodedToken) {
            throw new ApiErrors(400, "Invalid Token")

        }
        const user = await User.findById(decodedToken?._id).select("-password")
        if (!user) {

            throw new ApiErrors(400, "Invalid Token")
        }
        req.user = user;
        next();

    } catch (error) {
        throw new ApiErrors(400, "something went wrong with your request")

    }
})
export { verifyUser }