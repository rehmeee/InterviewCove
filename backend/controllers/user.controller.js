import { User } from "../models/user.model.js";
import { ApiErrors } from "../utils/apiErrors.js";
import asyncHandler from "../utils/asyncHandler.js"

const userLogin = asyncHandler(async (req, res)=> {
    const {email, userName, password} = req.body;
    if(!email || !userName || !password){
        throw new ApiErrors(400, "please enter all the Details");
    }
    const user =await User.findOne({$or:[{userName}, {email}]});
if(!user){
    throw new ApiErrors(400, "user not found");

}

})