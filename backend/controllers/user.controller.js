import { User } from "../models/user.model.js";
import { ApiErrors } from "../utils/apiErrors.js";
import { ApiResponse } from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js"


// method to genrate the access tokens 

const genrateTokens = async (userid) => {
    try {
        const user = await User.findById(userid);
        const accessToken = user.genrateAccessTokens();
        const refreshToken = user.genrateRefreshTokens();
        if(!accessToken || !refreshToken){
            console.log("error while genrting tokens")
        }
        user.refreshToken = refreshToken;
       await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken};

    } catch (error) {
        console.log("error while genrting tokens ", error)
    }
}
const userLogin = asyncHandler(async (req, res) => {
    const { email, userName, password } = req.body;
    if (!email || !userName || !password) {
        throw new ApiErrors(400, "please enter all the Details");
    }
    const user = await User.findOne({ $or: [{ userName }, { email }] });
    if (!user) {
        throw new ApiErrors(400, "user not found");

    }
    let pass = await user.ispasswordCorrect(password);
    if(!pass){
        throw new ApiErrors(400, "access denied user not valid")
    }
    const {accessToken , refreshToken} = await genrateTokens(user._id);
    if(!accessToken || !refreshToken){
        throw new ApiErrors(400, "error while genrating tokens");

    }
    const logindUser = await User.findById(user._id).select("-refreshToken -password");
    const options = {
        httponly: true,
        secrue: true
    }
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                logindUser,
                accessToken,
                refreshToken
            }, 
            "user logind successfully"
        )
    );








});
export { userLogin }