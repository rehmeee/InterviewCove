import {configureStore} from "@reduxjs/toolkit"

import sessionSlice from "../src/features/sessionSlice.js"
import authSlice from "../src/features/signInSlice.js"
export const store = configureStore({
reducer:{
    session: sessionSlice,
    auth: authSlice
}

})