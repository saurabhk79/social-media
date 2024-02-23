import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./services/signup-user-slice";

const store = configureStore({
    reducer: {
        signupReducer
    }
});

export default store;
