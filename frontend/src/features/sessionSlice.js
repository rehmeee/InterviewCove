import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState ={
    messages:[{}],
    question: [{}],
    users:[{}],

}
const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers:{
        addMessage: (state, action)=>{
            const message = {
                id : nanoid(),
                messageText : action.payload.messageText,
                userId: action.payload.userId
            }
            state.messages.push(message)
        }, 
        addQuestion: (state, action)=>{
            state.question = action.payload
        },
        addUser : (state, action)=>{
            state.users.push(action.payload)
        }
    }
})
export const {addMessage, addQuestion, addUser} = sessionSlice.actions

export default sessionSlice.reducer