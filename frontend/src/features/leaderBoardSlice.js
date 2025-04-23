import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = createAsyncThunk('leaderboard/info', async(_, thunkAPI)  =>{
    try {
            const response = await axios.get("http://localhost:5000/session/leaderboard")
            return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)  

    }
})

const leaderboardSlice = createSlice({
    name: leaderboard,
    initialState,
    reducers:{
        addSessionInfo:  (state, action)=>{

        }
    }
})
export const {addSessionInfo} = leaderboardSlice.actions
export default leaderboardSlice.reducer