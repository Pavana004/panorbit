import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../redux/UserSlice"



export const store = configureStore({
    reducer: {
       user:userSlice
    },
  })