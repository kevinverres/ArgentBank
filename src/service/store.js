import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../service/loginSlice";
import profileReducer from "../service/profileSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer
  },
});

export default store;
