import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "./features/postSlice"

export default configureStore({
  reducer: {
      repos: reposReducer
  },
});