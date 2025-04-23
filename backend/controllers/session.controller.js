import { Questions } from "../models/questions.model.js";
import { Session } from "../models/session.model.js";
import { ApiErrors } from "../utils/apiErrors.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const sessionInfo = asyncHandler(async (req,res) => {
    const subject = req.query.subject;
    const session = await Session.create({
        
    })
    if(!subject){
        throw new ApiErrors(400, "please provide subject name");
    }
    const questions = await Questions.find({
        subject: subject
    })
    if(!questions){
        throw new ApiErrors(400, "No Questions find related to this Subject");

    }
    return res
    .status(200)
    .json(
        new ApiResponse(200, questions, " quesions find")
    )
})
const leaderboardInfo = asyncHandler(async(req, res)=>{
    
})

export {sessionInfo}