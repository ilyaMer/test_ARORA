import { createAsyncThunk } from "@reduxjs/toolkit"
import { authApi } from "../../../api/api-auth"
import { userApi } from "../../../api/api-user"

export const setAuth = createAsyncThunk(
    'auth/isAuth',
    async (_, thunkAPI) => {
        try {
            return authApi.auth()
        } catch (error) {
            return thunkAPI.rejectWithValue("Нет соединения")
        }
    }
)