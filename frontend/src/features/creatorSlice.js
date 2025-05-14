import { createSlice } from "@reduxjs/toolkit";

const creatorSlice = createSlice({
    name: "creator",
    initialState:{
        isCreate: true
    },
    reducers:{
        changeCreator: (state, action)=>{
            state.isCreate = false;
        }
    }
});

export const {changeCreator} = creatorSlice.actions;
export default creatorSlice.reducer;