import authReducer from '../../../features/auth/authSlice.js';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
