import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const refreshToken = localStorage.getItem("refreshToken")
const initialState = {
    token: refreshToken? refreshToken: null,

}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        addTokens : (state, action)=>{
            state.token = action.payload
        },
        removeToken : (state, action)=>{
            state.token = null
        }
    }
})

export const {addTokens, removeToken} = authSlice.actions

export default authSlice.reducer