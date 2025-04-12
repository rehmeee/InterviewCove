import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
let initialState ;
  try {
     initialState = await axios.get("https:localhost//5300/leaderboard").then(data=> console.log(data))
} catch (error) {
    
}

const leaderboardSlice = createSlice({
    name: leaderboard,
    initialState,
    reducers:{
        isLogedIn:  (state, action)=>{

        }
    }
})