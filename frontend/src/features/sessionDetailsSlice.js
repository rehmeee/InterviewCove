import { createSlice } from "@reduxjs/toolkit";

const sessionDetailsSlice = createSlice({
    name: "sessionInfo",
    initialState : {
        subject : null,
        questions : null,
        roomID: null,
        users:[]
    },
    reducers:{
        addSessionDetails: (state, action)=>{
            state.questions = action.payload.questions,
            state.subject = action.payload.subject,
            state.roomID = action.payload.roomID
        }
    }
})

export const {addSessionDetails} = sessionDetailsSlice.actions;
export default sessionDetailsSlice.reducer