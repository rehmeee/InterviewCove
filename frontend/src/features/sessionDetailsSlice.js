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
        }
    }
})

export const {addSessionDetails} = sessionDetailsSlice.actions;
export default sessionDetailsSlice.reducer