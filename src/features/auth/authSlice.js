import tokenService from "../../services/token.service.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "../../services/auth.service.js";
import axios from "axios";

const user = tokenService.getUser()
const initialState = user.accessToken
  ? {
    isLoggedIn: true,
    user: user,
    error: ""
  }
  : {
    isLoggedIn: false,
    user: { accessToken: "", refreshToken: "" },
    error: ""
  }

export const registerAsync = createAsyncThunk(
  "auth/signup",
  async (userRegister, thunkApi) => {
    if (userRegister.password !== userRegister.repeatPassword) {
      thunkApi.dispatch(setError(`Your password doesn't match`))
      return thunkApi.rejectWithValue(`Your password doesn't match`)
    }
    try {
      const response = await authService.register(
        userRegister
      )
      console.log(response)
      if (response.accessToken) {
        return response
      }
    } catch (_error) {
      const error = _error
      console.log(error)
      if (axios.isAxiosError(error)) {
        thunkApi.dispatch(setError(error.response?.data.message))
        return thunkApi.rejectWithValue(error.response?.data.message)
      }
      thunkApi.dispatch(setError(error.message))
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const loginAsync = createAsyncThunk(
  "auth/signin",
  async (userCredentials, thunkApi) => {
    console.log(userCredentials)
    try {
      const response = await authService.login(
        userCredentials.username,
        userCredentials.password
      )
      if (response.accessToken) {
        return response
      }
    } catch (_error) {
      const error = _error
      console.log(error)
      if (axios.isAxiosError(error)) {
        thunkApi.dispatch(setError(error.response?.data.message))
        return thunkApi.rejectWithValue(error.response?.data.message)
      }
      thunkApi.dispatch(setError(error.message))
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  authService.logout()
})

export const payForQr = createAsyncThunk("auth/qr", async ()=> {
  authService.payForQr({
    "id": 1,
    "value" : 50000,
    "name" : "купил подписку"
  })
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    refreshToken: (state, { payload }) => {
      state.user.accessToken = payload.accessToken
      state.user.refreshToken = payload.refreshToken
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true
        state.user = payload.user
        state.error = ""
      })
      .addCase(loginAsync.rejected, state => {
        state.isLoggedIn = false
      })
      .addCase(registerAsync.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true
        state.user = payload.user
        state.error = ""
      })
      .addCase(logoutAsync.fulfilled, state => {
        state.isLoggedIn = false
        state.user = { accessToken: "", refreshToken: "" }
        state.error = ""
      })
  }
})

export const { setError, refreshToken } = authSlice.actions

export const selectAuth = state => state.auth

export default authSlice.reducer
