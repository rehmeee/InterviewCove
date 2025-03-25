import { Results } from "../models/result.model.js";
import { User } from "../models/user.model.js";
import { ApiErrors } from "../utils/apiErrors.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js"


// method to genrate the access tokens 

const genrateTokens = async (userid) => {
    try {
        const user = await User.findById(userid);
        const accessToken = user.genrateAccessTokens();
        const refreshToken = user.genrateRefreshTokens();
        if (!accessToken || !refreshToken) {
            console.log("error while genrting tokens")
        }
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken };

    } catch (error) {
        console.log("error while genrting tokens ", error)
    }
}

// user login starts here 
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
    if (!pass) {
        throw new ApiErrors(400, "access denied user not valid")
    }
    const { accessToken, refreshToken } = await genrateTokens(user._id);
    if (!accessToken || !refreshToken) {
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


// user signUp starts here 
const singUp = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        throw new ApiErrors(400, "please provide all the information")
    }
    const existedUser = await User.findOne({
        email: email
    })
    if(existedUser){
        throw new ApiErrors(300, "user is already existd please login")
        
    }
    const user = await User.create({
        name, 
        email,
        password
    })
    const createduser = await User.findById(user?._id).select("-password -refreshToken")
    if(!createduser){
        throw new ApiErrors(400, "error while genrating user")
        
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, {
            createduser
        }, "user Created")
    )
});


// get the information of test results

const getResults = asyncHandler(async (req,res) => {
    const user = await User.findById(req?.user._id);
    const results = await Results.find({
        user : user?._id
    })
    return res
    .status(200)
    .json(
        new ApiResponse(
            200, 
            results,
            "success"
        )
    )
})
export { userLogin , singUp, getResults}