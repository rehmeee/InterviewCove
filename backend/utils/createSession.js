import { Questions } from "../models/questions.model"
import { Session } from "../models/session.model";
import { ApiErrors } from "./apiErrors";

export const createSession = async (user, roomId, subject, noOfQuestions) => {
        const questions = await Questions.find({
            subject
        }).limit(noOfQuestions);
        if(!questions){
            throw new ApiErrors(400, "error while fetching questions")
        }

        const createdSession =await Session.create({
            sessionId: roomId,
            participents:[
                {
                    participent: user?._id,
                }
            ],
            createdAt: user?._id,
            subject,
            totalMarks:noOfQuestions
        })

        return {questions, createdSession};

}