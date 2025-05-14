import {configureStore} from "@reduxjs/toolkit"

import sessionSlice from "../src/features/sessionSlice.js"
import authSlice from "../src/features/signInSlice.js"
import leaderboardSlice from "../src/features/leaderBoardSlice.js"
import questionSlice from "../src/features/questionsSlice.js"
import sessionDetailsSlice from "../src/features/sessionDetailsSlice.js"
import creatorSlice from "../src/features/creatorSlice.js"
export const store = configureStore({
reducer:{
    session: sessionSlice,
    auth: authSlice,
    leaderboard : leaderboardSlice,
    questions: questionSlice,
    sessionInfo: sessionDetailsSlice,
    creatorSlice: creatorSlice

}

})