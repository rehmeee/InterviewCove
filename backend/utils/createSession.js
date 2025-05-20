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
        let questionArray = [];
        // create array for all the id of the questions so the other user will get all the same questions 
        questions.map((question)=>questionArray.push(question._id))


        const createdSession =await Session.create({
            sessionId: roomId,
            participents:[
                {
                    participent: user?._id,
                }
            ],
            createdAt: user?._id,
            subject,
            totalMarks:noOfQuestions,
            questionsList: questionArray
        })

        return {questions, createdSession};

}