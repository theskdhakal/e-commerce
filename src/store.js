import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
