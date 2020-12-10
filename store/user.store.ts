import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import { login } from "../api/user.api";
import {LoginParams} from "../types/authorization.types";
import {getAuthorizationService} from "../factories";

export const moduleName = 'user';

export const userEntity = createEntityAdapter();

export const loginUser = createAsyncThunk(
  `${moduleName}/loginUser`,
  async (params: LoginParams) => {
    const { data } = await login(params);
    getAuthorizationService().setToken(data.token);
  },
)

const { reducer } = createSlice({
  name: moduleName,
  initialState: userEntity.getInitialState({
    isLoggedIn: false,
  }),
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled.type]: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export default reducer;
