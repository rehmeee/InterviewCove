import { createSlice } from "@reduxjs/toolkit";

const sessionDetailsSlice = createSlice({
    name: "sessionInfo",
    initialState : {
        subject : null,
        question : null,
        roomID: null,
        users:[]
    },
    reducers:{
        addSessionDetails: (state, action)=>{
            state.question = action.payload.question,
            state.subject = action.payload.subject,
            state.roomID = action.payload.roomID
        },
        adduser: (state, action)=>{
            state.users = state.users.push(action.payload)
        }
    }
})

export const {addSessionDetails, adduser} = sessionDetailsSlice.actions;
export default sessionDetailsSlice.reducer