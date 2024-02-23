import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./services/signup-user-slice";
import loginReducer from "./services/login-user-slice";

const store = configureStore({
    reducer: {
        signupReducer,
        loginReducer
    }
});

export default store;
