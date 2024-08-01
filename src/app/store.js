import jobReducer from "./slices/jobSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { jobReducer },
});