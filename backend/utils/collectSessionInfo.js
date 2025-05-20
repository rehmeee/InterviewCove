import { Session } from "../models/session.model.js"

// this will collect the all the information about the session and gives the session with questions list and all the other stuff needed
export const collectInfo = async(roomId) =>{
        const session = await Session.findOne({
            sessionId: roomId
        }).populate("questionsList").populate("createdBy", "name email")

        if(!session){
            console.log("error while fetching session inf0"); 
            return {}
        }
        return session;

}