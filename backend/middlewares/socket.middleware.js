import { asyncHandler } from "../utils/asyncHandler.js";


// add the middleware to check either the socket is valid or not
export const socketMiddleware = asyncHandler(async (socket, next) => {
        try {
            const token = socket.handshake.auth.token;
            if (!token) {
                return next(new Error("no token found"))
            }
            const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
            const user = await User.findById(decoded._id).select("-password")
            if (!user) {
                return next(new Error("user is not found"))
            }
            socket.user = user;
            next();
        } catch (error) {
            return next(new Error("user is Unathurized"))
        }
    })