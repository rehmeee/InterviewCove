import { Session } from "../models/session.model"



// /it will update the session record when the other user joined the session
export const updateSession = async (user, roomId) => {
    await Session.findOneAndUpdate({sessionId: roomId}, {
        $push:{
            participents:{
               participent: user._id
            }
        }
    },{new : true});
}